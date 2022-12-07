export default function Card({ page }) {
  const pageos = page?.hash?.split("#")[1]?.toString()?.toLowerCase();

  const isActive = (va) => {
    if (va == pageos) return "active";
    else if (pageos == undefined && va == "home") return "active";
    else return "";
  };
  const loc = page.pathname.split("/")[1].toString().toLowerCase();
  // console.log(loc);
  function myFunction(e) {
    // var x = document.getElementById("myLinks");
    var x = document.getElementsByClassName("nav")[0];
    // console.log(x);
    if (x.style?.display === "flex") {
      x.style.display = "";
      document.querySelector("body").classList.remove("disable-scroll");
    } else {
      x.style.display = "flex";
      document.querySelector("body").classList.add("disable-scroll");
    }
  }

  const remy = () => {
    document.querySelector("body").classList.remove("disable-scroll");
    var x = document.getElementsByClassName("nav")[0];
    x.style.display = "";
  };
  return (
    <>
      <i className="fa fa-bars" onClick={myFunction}></i>
      <nav className="nav">
        {loc == "projects" ? (
          <div
            className="op"
            // style={{ display: "flex" }}
          >
            <span className={isActive("home")} onClick={() => remy()}>
              <a href="/#home" className="link">
                Home
              </a>
            </span>

            <span className={isActive("projects")} onClick={() => remy()}>
              <a href="/#projects" className="link">
                Projects
              </a>
            </span>

            <span className={isActive("about")} onClick={() => remy()}>
              <a href="/#about" className="link">
                About
              </a>
            </span>
            <span className={isActive("contact")} onClick={() => remy()}>
              <a href="/#contact" className="link">
                Contact
              </a>
            </span>
          </div>
        ) : (
          <div className="op" style={{ display: "flex" }}>
            <span className={isActive("home")} onClick={() => remy()}>
              <a href="#home" className="link">
                Home
              </a>
            </span>

            <span className={isActive("projects")} onClick={() => remy()}>
              <a href="#projects" className="link">
                Projects
              </a>
            </span>

            <span className={isActive("about")} onClick={() => remy()}>
              <a href="#about" className="link">
                About
              </a>
            </span>
            <span className={isActive("contact")} onClick={() => remy()}>
              <a href="#contact" className="link">
                Contact
              </a>
            </span>
          </div>
        )}
      </nav>
    </>
  );
}
