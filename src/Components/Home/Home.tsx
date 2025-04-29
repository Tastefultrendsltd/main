import { Box } from "@mui/material";
import React, { Suspense } from "react";
import {
  show1,
  show10,
  show2,
  show3,
  show4,
  show5,
  show6,
  show7,
  show8,
  show9,
} from "~/src/Utils/ASSETS";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import Contact from "../Contact/Contact";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Events from "../Events/Events";
import Loader from "../Loader/Loader";

const eventPhotos = [
  show1,
  show2,
  show3,
  show4,
  show5,
  show6,
  show7,
  show8,
  show9,
  show10,
];

class Home extends React.Component<BreakpointProps> {
  render() {
    const breakpointProps = this.props;
    return (
      <Box>
        <Box id="Home">
          <Suspense fallback={<Loader />}>
            <CustomCarousel items={eventPhotos} />
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
