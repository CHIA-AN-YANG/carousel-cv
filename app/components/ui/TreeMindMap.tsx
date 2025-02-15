"use client"
import { useEffect, useRef } from "react";
import * as d3 from "d3";

type TreeNode = {
  name: string;
  children?: TreeNode[];
  color?: string;
  bg?: string;
};
interface Axis {
  x: number;
  y: number;
}

type TreeMindMapProps = {
  data: TreeNode;
};


function preprocessData(data: TreeNode) {
  return d3.hierarchy(data);
};

function diagonal(s: Axis, d: Axis) {
  const diff = d.x - s.x;
  return `M ${s.y} ${s.x}
    C ${(s.y + d.y) / 2} ${s.x},
      ${(s.y + d.y) / 2} ${d.x},
      ${d.y} ${d.x},
      ${(s.y + d.y) / 1.8} ${d.x},
      ${(s.y + d.y) / 1.8} ${s.x - diff * 0.5},
      ${s.y} ${s.x}
      `;
}

const TreeMindMap: React.FC<TreeMindMapProps> = ({ data }) => {

  const fontFace = "Tenor Sans";
  const margin = 20;
  const defaultBg = "#E7E7E7";
  //const defaultColor= "#000";
  const ballColor = "#FFD700";

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data) return;
    const root = preprocessData(data);
    const width = 800;
    const height = 500;
    const fontSize = height / 30;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [-50, 0, width, height])
      .style("font", `${fontSize}px ${fontFace}`);

    const tree = d3.tree<TreeNode>().size([height, width - 280]);
    const treeData = tree(root);


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const link = svg.append("g")
      .selectAll("line")
      .data(treeData.links())
      .enter()
      .insert('path', 'g')
      .attr("stroke", defaultBg)
      .attr("stroke-width", 2)
      .attr('d', d => {
        const o1 = { x: d.source.x as number, y: d.source.y as number };
        const o2 = { x: d.target.x as number, y: d.target.y as number };
        return diagonal(o1, o2);
      });

    const nodes = svg.append("g")
      .selectAll("g")
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    nodes.append("circle")
      .attr("r", 6)
      .attr("stroke", defaultBg)
      .attr("stroke-width", 2)
      .attr("fill", ballColor);

    nodes.append("rect")
      .attr("x", d => d.data.name.length * fontSize * (-0.1) - margin)
      .attr("y", -16 - margin * 1.5)
      .attr("height", 30)
      .attr("width", d => d.data.name.length * fontSize * 0.7)
      .attr("fill", d => d.data.bg ?? defaultBg);

    nodes.append("text")
      .attr("dy", 5 - margin * 1.5)
      .attr("dx", -margin)
      .attr("fill", d => d.data.color ?? "#000")
      .attr("text-anchor", "start")
      .text(d => d.data.name);
  }, [data]);

  return <svg ref={svgRef} width={800} height={500}></svg>;
};

export default TreeMindMap;
