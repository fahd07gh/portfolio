export default function Card({ img, projectsName, id }) {
  return (
    <>
      <div className="card">
        <a href={"/Projects/" + id}>
          <img src={img} alt={projectsName} />
          <div className="info">
            <h2>{projectsName}</h2>
          </div>
        </a>
      </div>
    </>
  );
}
