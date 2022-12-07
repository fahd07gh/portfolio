import { BsInstagram, BsTwitter, BsSnapchat } from "react-icons/bs";
export default function Card({ page }) {
  const pageos = page.pathname.split("/")[1].toString().toLowerCase();
  const isActive = (va) => {
    if (va == pageos || va == page.pathname) return "active";
    else return "";
  };
  return (
    <>
      <div className="nav">
        {page.pathname !== "/" ? (
          <div className="navSocialMedia">
            <div className="icons">
              <BsInstagram />
            </div>
            <div className="icons">
              <BsTwitter />
            </div>
            <div className="icons">
              <BsSnapchat />
            </div>
          </div>
        ) : (
          ""
        )}
        <span className={isActive("/")}>
          <a href="/" className="link">
            Home
          </a>
        </span>

        <span className={isActive("projects")}>
          <a href="Projects" className="link">
            Projects
          </a>
        </span>

        <span className={isActive("about")}>
          <a href="About" className="link">
            About
          </a>
        </span>
        <span className={isActive("contact")}>
          <a href="contact" className="link">
            Contact
          </a>
        </span>
      </div>
    </>
  );
}
