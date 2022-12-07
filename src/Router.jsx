import "./styles.css";
import React from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Page from "./Pages/Page";
import Error from "./Pages/404";
import Nav from "./components/Nav3";
import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";

function Router() {
  const location = useLocation();

  return (
    <>
      {/* Pages */}
      <Nav page={location} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Page />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Router;
