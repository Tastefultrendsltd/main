import { Box } from "@mui/material";
import React from "react";
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
          <CustomCarousel items={eventPhotos} />
        </Box>
        <Box id="Events">
          <Events breakpoint={breakpointProps} />
        </Box>
        <Box id="ContactUs">
          <Contact breakpoint={breakpointProps} />
        </Box>
      </Box>
    );
  }
}

export default withBreakpoint(Home);
