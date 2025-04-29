import { Box } from "@mui/material";
import React, { Suspense } from "react";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import Contact from "../Contact/Contact";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Events from "../Events/Events";
import Loader from "../Loader/Loader";

class Home extends React.Component<BreakpointProps> {
  render() {
    const breakpointProps = this.props;
    return (
      <Box component="main" aria-label="main">
        <Box id="Home">
          <Suspense fallback={<Loader />}>
            <CustomCarousel />
          </Suspense>
        </Box>
        <Box id="Events">
          <Suspense fallback={<Loader />}>
            <Events breakpoint={breakpointProps} />
          </Suspense>
        </Box>
        <Box id="ContactUs">
          <Contact breakpoint={breakpointProps} />
        </Box>
      </Box>
    );
  }
}

export default withBreakpoint(Home);
