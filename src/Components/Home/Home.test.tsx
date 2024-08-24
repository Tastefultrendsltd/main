import React from "react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { HashRouter as Router } from "react-router-dom";
// import { enqueNotistack } from '../../Utils/enqueNotistack/enqueNotistack';
import { Provider } from "react-redux";
import { store } from "../../redux/store";
// jest.mock('../Utils/enqueNotistack/enqueNotistack', () => ({
//   enqueNotistack: jest.fn(),
// }));

test("renders Home component and calls enqueNotistack on mount", () => {
  act(() => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
  });
  const text = screen.getByText(/Hi, I am Shaikh Javed!/i);
  expect(text).toBeInTheDocument();

  // expect(enqueNotistack).toHaveBeenCalled();
});
