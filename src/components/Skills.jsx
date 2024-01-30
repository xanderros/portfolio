import skills from "../data/skills.js";
import ExternalLinkIcon from "./ExternalLinkIcon.jsx";

function Skills() {
  return (
    <section className="section section_skills" id="skills">
      <div className="container">
        <h2 className="title">Skills</h2>
        <div className="skills">
          <ul className="skills__list">
            {skills.map((item) =>
              item.extLink ? (
                <li className="skills__item" key={item.skill}>
                  <a
                    className="skills__link"
                    href={item.extLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.skill}&nbsp;
                    <ExternalLinkIcon size={16} color="#07a7e9" />
                  </a>
                </li>
              ) : (
                <li className="skills__item" key={item.skill}>
                  {item.main ? (
                    <strong className="skills__main">{item.skill}</strong>
                  ) : (
                    item.skill
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
