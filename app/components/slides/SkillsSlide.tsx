"use client"

import TreeMindMap from '../ui/TreeMindMap';


const treeData = {
  "name": "frontend",
  "children": [
    {
      "name": "angular",
      "children": [{ "name": "ngrx" }, { "name": "rxjs" }, { "name": "Sass" }, { "name": "SSR " }],
      "bg": "#dd5050",
      "color": "#E7E7E7"
    },
    {
      "name": "react",
      "children": [{ "name": "redux" }, { "name": "tailwind" }, { "name": "Next.js" }],
      "bg": "#33a4fa",
    }
  ]
};

const treeData2 = {
  "name": "e-commerce ",
  "children": [
    {
      "name": "SEO ",
      "bg": "#96d38c"
    },
    {
      "name": "CMS system ",
      "children": [
        { "name": "headless cms" }
      ],
      "bg": "#f5a623"
    }
  ]
};

function SkillsSlide() {

  return (
    <>
      <div className="skills--container slide">
        <hgroup className="skills--content__header content__header">
          <h2 className="skills--content__title content__title">Skill Tree</h2>
          <div className="skills--content__description content__description">
            <p>
              my skill tree.
            </p>
          </div>
        </hgroup>
        <div className="skills--mindmap__container">
          <TreeMindMap data={treeData} />
          <TreeMindMap data={treeData2} />
        </div>
      </div>
    </>
  );
}

export default SkillsSlide;