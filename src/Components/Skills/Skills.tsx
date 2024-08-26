import React, { Component } from "react";
import "./Skills.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import { Box, Button, Stack, Typography } from "@mui/material";
interface ISkillsProps extends WithRouterProps, BreakpointProps {}
class Skills extends Component<ISkillsProps> {
  handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const { navigate } = this.props;
    navigate(type);
  };
  render() {
    const { xs, lg, sm, md } = this.props;
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
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            className="skillIcon"
            p="1rem"
            gap="1rem"
            alignItems="center"
          >
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-reactjs-line ri-5x" />
              <Typography variant="h5" color="white">
                React Js
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                ADVANCE
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-javascript-line ri-5x" />
              <Typography variant="h5" color="white">
                JavaScript
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                ADVANCE
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-html5-line ri-5x" />
              <Typography variant="h5" color="white">
                Html/Css
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                ADVANCE
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-github-line ri-5x" />
              <Typography variant="h5" color="white">
                Git
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                INTERMEDIATE
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-database-2-line ri-5x" />
              <Typography variant="h5" color="white">
                SQL/NoSQL
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                BASIC
              </Typography>
            </Stack>
            <Stack
              borderRight="none"
              className="skillIconBox"
              alignItems="center"
              gap="0.5rem"
            >
              <i className="ri-npmjs-line ri-5x" />
              <Typography variant="h5" color="white">
                Node JS
              </Typography>
              <Typography variant="h6" color="#78BDF1">
                BASIC
              </Typography>
            </Stack>
          </Box>
          <Typography variant="h6" fontWeight="750" color="#40A6DD">
            TOOLS
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            className="skillIcon"
            p="1rem"
            gap="1rem"
            alignItems="center"
          >
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-secure-payment-line ri-5x" />
              <Typography variant="h5" color="white">
                Payment Gateway
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-database-line ri-5x" />
              <Typography variant="h5" color="white">
                Redux
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-tools-line ri-5x" />
              <Typography variant="h5" color="white">
                Jenkins
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-pencil-ruler-2-line ri-5x" />
              <Typography variant="h5" color="white">
                figma
              </Typography>
            </Stack>
            <Stack className="skillIconBox" alignItems="center" gap="0.5rem">
              <i className="ri-line-chart-line ri-5x" />
              <Typography variant="h5" color="white">
                Charts
              </Typography>
            </Stack>
          </Box>
          <Button
            onClick={(e) => this.handleClick(e, "/contact")}
            variant="outlined"
            sx={{
              width: xs ? "100%" : "14rem",
            }}
          >
            Hire Me!
          </Button>
        </Stack>
      </Box>
    );
  }
}

export default withBreakpoint(withRouter(Skills));
