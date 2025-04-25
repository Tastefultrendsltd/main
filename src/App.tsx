import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import ScrollToTop from "./Utils/scrollToTop";

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
