import projects from "@/public/json/projects.json";

const ProjectFalconPack = () => (
  <>
    <p>We built a brand new
      <abbr title="business-to-consumer">B2C</abbr>
      site to replace the existing wordpress site. The new site has custom
      <abbr title="content management system">CMS</abbr> to manage the content, and is tailered for consumers to:</p>
    <ul>
      <li>Compare products.</li>
      <li>Memorize consumers geolocations.</li>
    </ul>
    <p>Falcon Pack, the flagship company of the falcon group, is manufacturing disposable packaging products for the food service and consumer market.Its headquarter is in Sharjah U.A.E. Falcon pack exports thier products worldwide.</p>
  </>
);

const ProjectsSlide: React.FC = () => {

  return (
    <>
      <div className="project--container slide">
        <h2 className="content__title">Projects</h2>
        <div className="content__description">
          {projects ? projects.map(project => <details
            name={project.key}
            key={project.key}
            className='project--content__details'
            style={{ "--project-primary": project.color } as React.CSSProperties}
          >
            <summary>
              <h3>{project.name}</h3>
              {project.summaryTags.map((tag, index) => (
                <span key={index} className="content__highlight">
                  <em>{tag}</em>
                </span>
              ))}
            </summary>
            <time>{project.time}</time>
            {project.key === "falconpack" ? <ProjectFalconPack /> : <p>{project.description}</p>}
          </details>) : ""}
        </div>
      </div>
    </>
  );
}

export default ProjectsSlide;