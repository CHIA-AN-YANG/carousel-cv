import projects from '../../json/projects.json';

interface Project {
  name: string;
  summaryTags: string[];
  description: string;
}

// interface ProjectDetailsProps {
//   project: Project;
// }

const ProjectsSlide: React.FC = () => {

  return (
    <>
      <div className="project--container slide">
        <h2 className="content__title">Projects</h2>
        <div className="content__description">
          {projects ? projects.map(project => <details name={project.key} key={project.key}>
            <summary>
              <h3>{project.name}</h3>
              {project.summaryTags.map((tag, index) => (
                <span key={index}>
                  <em>{tag}</em>
                </span>
              ))}
            </summary>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
          </details>) : ""}
        </div>
      </div>
    </>
  );
}

export default ProjectsSlide;