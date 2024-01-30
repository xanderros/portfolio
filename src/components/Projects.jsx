import projects from "../data/projects";
import ProjectText from "./ProjectText";
import ProjectFigure from "./ProjectFigure";

function Projects() {
  return (
    <>
      <span id="projects"></span>
      <section className="section section_projects">
        <div className="section__title">
          <h2 className="title title_animated">
            <span className="title__letter">Proj</span>
            <span className="title__hide-letter">e</span>
            <span className="title__e-wrap">
              <span className="title__e title__e_side"></span>
              <span className="title__e title__e_top"></span>
              <span className="title__e title__e_middle"></span>
              <span className="title__e title__e_bottom"></span>
            </span>
            <span className="title__letter">c</span>
            <span className="title__hide-letter">t</span>
            <span className="title__t-wrap">
              <span className="title__t title__t_horizontal"></span>
              <span className="title__t title__t_vertical"></span>
            </span>
            <span className="title__letter">s</span>
          </h2>
        </div>
        <div className="container">
          <div className="projects">
            {projects.map((item) => (
              <ProjectText
                key={item.site}
                link={item.link}
                img={item.img}
                alt={item.site}
                site={item.site}
                desc={item.desc}
                tech={item.tech}
                color={item.color}
                first={item.first}
              />
            ))}
            <div className="projects__side">
              <div className="projects__figure">
                <div className="projects__pictures hoverable">
                  {projects.map((item) => (
                    <ProjectFigure
                      key={item.site}
                      link={item.link}
                      img={item.img}
                      alt={item.site}
                      first={item.first}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
