import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Utils/scrollToTop";
import Loader from "./Components/Loader/Loader";

const App: React.FC = () => {
  const Experience = lazy(() => import("./Components/Experience/Experience"));
  const Projects = lazy(() => import("./Components/Projects/Projects"));
  const Skills = lazy(() => import("./Components/Skills/Skills"));
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loader />}>
              <Skills />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
