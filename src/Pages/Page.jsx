import Data from "../ProjectsData.json";
import { useParams } from "react-router-dom";
export default function App() {
  let Params = useParams();

  return (
    <>
      <div className="page">
        {Data.projects.map((item) => {
          if (Params.id == item.id)
            return (
              <>
                <header key={item.id}>
                  <div className="bg"></div>
                  <img src={item.img} alt="" />
                  <h1>{item.projectsName}</h1>
                </header>
                <main>
                  <p>{item.more}</p>
                </main>
              </>
            );
        })}
      </div>
    </>
  );
}
