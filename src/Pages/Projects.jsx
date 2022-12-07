import Data from "../ProjectsData.json";

import Card from "../components/Card";
export default function Projects() {
  return (
    <>
      <section className="Projects" id="projects">
        <h1 className="title">Projects</h1>
        {Data?.projects.map((ite, index) => {
          if (index < 6)
            return (
              <Card
                key={ite.id}
                img={ite.img}
                projectsName={ite.projectsName}
                id={ite.id}
              />
            );
        })}
      </section>
    </>
  );
}
