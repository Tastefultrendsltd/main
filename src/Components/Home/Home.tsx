import React, { Component, lazy, Suspense } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import "./Home.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import Loader from "../Loader/Loader";

interface IHomeProps extends WithRouterProps, BreakpointProps {}

class Home extends Component<IHomeProps> {
  Events = lazy(() => import("~/src/Components/Events/Events"));
  Contact = lazy(() => import("~/src/Components/Contact/Contact"));
  handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const { navigate } = this.props;
    navigate(type);
  };
  handleSocial = (type: string) => {
    if (type === "leetcode") {
      window.open("https://leetcode.com/skjaved");
    }
    if (type === "hacker") {
      window.open("https://www.hackerrank.com/skjaved633");
    }
    if (type === "github") {
      window.open("https://github.com/shaikhjavedofficial");
    }
  };
  render() {
    const { xs, md, sm } = this.props;
    return (
      <Box id="home">
        Home
        <Box id="Events">
          <Suspense fallback={<Loader />}>
            <this.Events />
          </Suspense>
        </Box>
        <Box id="ContactUs">
          <Suspense fallback={<Loader />}>
            <this.Contact />
          </Suspense>
        </Box>
      </Box>
    );
  }
}
export default withBreakpoint(withRouter(Home));
