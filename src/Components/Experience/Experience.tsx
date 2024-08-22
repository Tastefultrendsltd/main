import React, { Component } from "react";
import { Box, Stack, Typography } from "@mui/material";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import "./Experience.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import { EXP } from "~/src/Utils/ASSETS";
interface IExperienceProps extends WithRouterProps, BreakpointProps {}
class Experience extends Component<IExperienceProps> {
  render() {
    const { sm, md, xs } = this.props;
    return (
      <Box className="expBackground">
        <Box
          p="1.5rem 1rem 1rem 1rem"
          alignItems="center"
          display="flex"
          flexDirection="column"
          className="overlay"
        >
          <Typography variant="h4" color="#40A6DD" pb="2rem">
            Work Experience
          </Typography>
          <Stack
            flexDirection={xs ? "row" : "inherit"}
            width={xs ? "95vw" : "75vw"}
            gap="1rem"
          >
            {xs && (
              <Box
                display="flex"
                alignItems="center"
                width="10vw"
                flexDirection="column"
              >
                <i className="ri-suitcase-fill ri-2x" />
                <Box className="line"></Box>
              </Box>
            )}
            <Stack flexDirection={xs ? "column" : "row"}>
              <Box
                display="flex"
                alignItems={xs ? "flex-start" : "flex-end"}
                flexDirection="column"
                width={xs ? "100%" : "20vw"}
              >
                <Typography variant="h6" textAlign={xs ? "start" : "end"}>
                  Senior SDE
                </Typography>
                <Typography>Jul 2024 - present</Typography>
                {xs && <Box className="horizontalLine"></Box>}
              </Box>
              {!xs && (
                <Box
                  display="flex"
                  alignItems="center"
                  width="10vw"
                  flexDirection="column"
                >
                  <i className="ri-suitcase-fill ri-2x" />
                  <Box className="line"></Box>
                </Box>
              )}
              <Stack justifyContent="flex-start" width={xs ? "85vw" : "45vw"}>
                <Typography variant="h6" pt={xs ? "0.5rem" : "0"}>
                  Axis Secutiries Ltd.
                </Typography>
                {!xs && <Box className="horizontalLine"></Box>}
                <ul>
                  <li>
                    Leading the Development of web-based online trading platform
                    (Invest).
                  </li>
                  <li>
                    Transferred from Freecharge to Axis Securities to deliver
                    the Digital Transformation project.
                  </li>
                  <li>
                    Providing mentorship, guidance & technical expertise to team
                    members, ensuring alignment with technical requirements,
                    project goals, efficient task prioritization & timely
                    delivery.
                  </li>
                  <li>
                    Drive architectural decisions and collaborate with product
                    managers & stake holders to translate business requirements
                    into technical solutions
                  </li>
                </ul>
                <Typography variant="body1"></Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            flexDirection={xs ? "row" : "inherit"}
            width={xs ? "95vw" : "75vw"}
            gap="1rem"
          >
            {xs && (
              <Box
                display="flex"
                alignItems="center"
                width="10vw"
                flexDirection="column"
              >
                <i className="ri-suitcase-fill ri-2x" />
              </Box>
            )}
            <Stack flexDirection={xs ? "column" : "row"}>
              <Box
                display="flex"
                alignItems={xs ? "flex-start" : "flex-end"}
                flexDirection="column"
                width={xs ? "100%" : "20vw"}
              >
                <Typography variant="h6" textAlign={xs ? "start" : "end"}>
                  SDE
                </Typography>
                <Typography>Nov 2022 - Jul 2024</Typography>
                {xs && <Box className="horizontalLine"></Box>}
              </Box>
              {!xs && (
                <Box
                  display="flex"
                  alignItems="center"
                  width="10vw"
                  flexDirection="column"
                >
                  <i className="ri-suitcase-fill ri-2x" />
                </Box>
              )}
              <Stack justifyContent="flex-start" width={xs ? "85vw" : "45vw"}>
                <Typography variant="h6" pt={xs ? "0.5rem" : "0"}>
                  Freecharge Payments Technologies Pvt. Ltd.
                </Typography>
                {!xs && <Box className="horizontalLine"></Box>}
                <ul>
                  <li>
                    Developed and deployed web-based financial application
                    (Invest, Chanakya).
                  </li>
                  <li>
                    Optimized Application Performance and Designed Responsive UI
                    using ReactJs and customized UI library subzero.
                  </li>
                  <li>Integrated Payment Gateway as well as Payment SDK.</li>
                  <li>
                    Created Microsites and Micro frontend to increase product
                    reusability (Login, Reports, Funds).
                  </li>
                  <li>
                    Implemented Redux toolkit and React hooks to increase
                    Application Performance.
                  </li>
                </ul>
                <Typography variant="body1"></Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            flexDirection={xs ? "row" : "inherit"}
            width={xs ? "95vw" : "75vw"}
            gap="1rem"
          >
            {xs && (
              <Box
                display="flex"
                alignItems="center"
                width="10vw"
                flexDirection="column"
              >
                <i className="ri-suitcase-fill ri-2x" />
              </Box>
            )}
            <Stack flexDirection={xs ? "column" : "row"}>
              <Box
                display="flex"
                alignItems={xs ? "flex-start" : "flex-end"}
                flexDirection="column"
                width={xs ? "100%" : "20vw"}
              >
                <Typography variant="h6" textAlign={xs ? "start" : "end"}>
                  Software Engineer
                </Typography>
                <Typography>Aug 2021 - Nov 2022</Typography>
                {xs && <Box className="horizontalLine"></Box>}
              </Box>
              {!xs && (
                <Box
                  display="flex"
                  alignItems="center"
                  width="10vw"
                  flexDirection="column"
                >
                  <i className="ri-suitcase-fill ri-2x" />
                </Box>
              )}
              <Stack justifyContent="flex-start" width={xs ? "85vw" : "45vw"}>
                <Typography variant="h6" pt={xs ? "0.5rem" : "0"}>
                  HCL Technologies Ltd.
                </Typography>
                {!xs && <Box className="horizontalLine"></Box>}
                <ul>
                  <li>
                    Developed web-based enterprise applications (Cicso ONC and
                    Netfussion).
                  </li>
                  <li>
                    Designed Responsive UI using ReactJs, Bootstrap, Antd and
                    Material UI.
                  </li>
                  <li>
                    Database Management with MySQL to optimise with SP and
                    integrated Rest API’s.
                  </li>
                  <li>
                    Conducted Unit Testing Using default React Testing Library
                    and Jest.
                  </li>
                  <li>
                    Created UX using Figma and documented the enhancements for
                    feature releases.
                  </li>
                  <li>Created REST API’s using NodeJS.</li>
                </ul>
                <Typography variant="body1"></Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
  }
}

export default withBreakpoint(withRouter(Experience));
