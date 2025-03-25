import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Utils/scrollToTop";
import Loader from "./Components/Loader/Loader";

const App: React.FC = () => {
  const Home = lazy(() => import("./Components/Home/Home"));
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
