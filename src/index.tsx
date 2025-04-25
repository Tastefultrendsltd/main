import { SnackbarProvider } from "notistack";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Layout from "./Layout";
import { store } from "./redux/store";
import SnackbarCloseButton from "./Utils/enqueNotistack/SnackbarCloseButton";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      action={(snackbarKey: any) => (
        <SnackbarCloseButton snackbarKey={snackbarKey} />
      )}
    >
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./Layout/index").default;
    root.render(
      <React.StrictMode>
        <SnackbarProvider
          maxSnack={3}
          action={(snackbarKey: any) => (
            <SnackbarCloseButton snackbarKey={snackbarKey} />
          )}
        >
          <Provider store={store}>
            <Router>
              <NextApp />
            </Router>
          </Provider>
        </SnackbarProvider>
      </React.StrictMode>
    );
  });
}
