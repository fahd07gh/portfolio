import { useEffect, useState } from "react";
import Logo from "../img/logo.svg";
import { BsInstagram, BsTwitter, BsSnapchat } from "react-icons/bs";
export default function Card({ page }) {
  const pageos = page.pathname.split("/")[1].toString().toLowerCase();
  const isActive = (va) => {
    if (va == pageos || va == page.pathname) return "active";
    else return "";
  };

  return (
    <>
      <div className="container">
        <div className="start">
          {page.pathname !== "/" ? (
            <div className="navSocialMedia">
              <div className="icons">
                <a href="" className="link">
                  <BsInstagram />
                </a>
              </div>
              <div className="icons">
                <a href="" className="link">
                  <BsTwitter />
                </a>
              </div>
              <div className="icons">
                <a href="" className="link">
                  <BsSnapchat />
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="center">
          <span className={isActive("/")}>
            <a href="/" className="link">
              Home
            </a>
          </span>

          <span className={isActive("projects")}>
            <a href="/Projects" className="link">
              Projects
            </a>
          </span>

          <span className={isActive("about")}>
            <a href="/About" className="link">
              About
            </a>
          </span>
          <span className={isActive("contact")}>
            <a href="/contact" className="link">
              Contact
            </a>
          </span>
        </div>

        <div className="end">
          <a
            href="/"
            className="link"
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "4px"
            }}
          >
            {/* logo */}
            <img
              style={{
                width: "50px"
                // height: "100px"
              }}
              src={Logo}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
