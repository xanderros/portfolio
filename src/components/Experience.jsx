import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="title">Experience</h2>
        <div className="exp">
          {experience.map((item) => (
            <ExperienceItem
              key={item.company}
              company={item.company}
              position={item.position}
              period={item.period}
              activity={item.activity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
