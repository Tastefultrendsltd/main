import React, { Component } from "react";
import "./Skills.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import { Box, Stack, Typography } from "@mui/material";
interface ISkillsProps extends WithRouterProps, BreakpointProps {}
class Skills extends Component<ISkillsProps> {
  render() {
    const { xs } = this.props;
    return (
      <Box className="skillBg">
        <Stack
          p="3rem 1.5rem 3rem 1.5rem"
          className="skillsOverlay"
          alignItems="center"
          gap="1.5rem"
        >
          <Typography variant="h6" fontWeight="750" color="#40A6DD">
            SKILLS
          </Typography>
          <Typography variant="h4" color="white" textAlign="center">
            What I use to create.
          </Typography>
          <Typography
            variant="body1"
            color="#78BDF1"
            pb="1rem"
            textAlign="center"
          >
            Currently, my strongest langauge is Javascript and the framework I
            extensively use is React, but I am always actively trying to learn
            new langauges, frameworks, and softwares. My familairty with skills,
            langauges, and frameworks range from basic to advance.
          </Typography>
          <Stack flexDirection={xs ? "column" : "row"}>
            <Box className="skillLine"></Box>
            <Stack></Stack>
            <Box className="skillLine"></Box>
          </Stack>
        </Stack>
      </Box>
    );
  }
}

export default withBreakpoint(withRouter(Skills));
