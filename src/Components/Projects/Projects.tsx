import React, { Component } from "react";
import "./Projects.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
interface IProjectsProps extends WithRouterProps, BreakpointProps {}
class Projects extends Component<IProjectsProps> {
  handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const { navigate } = this.props;
    if (type === "invest") {
      window.open("https://invest.axisdirect.in/dashboard");
    }
    if (type === "welcome") {
      window.open(
        "https://welcome.axisdirect.in/login/identifier/email-mobile"
      );
    }
    if (type === "donation") {
      window.open(
        "https://github.com/shaikhjavedofficial/personal/tree/master/donationappui-develop"
      );
    }
    if (type === "crisp") {
      window.open(
        "https://github.com/shaikhjavedofficial/crisp/tree/main/packages/templates/crisp"
      );
    }
    if (type === "skill") {
      navigate("/skills");
    }
  };
  render() {
    const { xs } = this.props;
    return (
      <Box className="projectBg">
        <Stack
          p="3rem 1.5rem 3rem 1.5rem"
          className="projectOverlay"
          alignItems="center"
          gap="1.5rem"
        >
          <Typography variant="h6" fontWeight="750" color="#40A6DD">
            PROJECTS
          </Typography>
          <Typography variant="h4" color="white" textAlign="center">
            What I have created.
          </Typography>
          <Typography
            variant="body1"
            color="#78BDF1"
            pb="1rem"
            textAlign="center"
          >
            Througthout my career I have worked on enterprise and financial
            solutions. I have listed my personal and professional projects.
          </Typography>
          <Typography variant="h5" color="#40A6DD" textAlign="center">
            PROFESSIONAL PROJECTS
          </Typography>
          <Stack flexDirection={xs ? "column" : "row"} gap="2rem">
            <Stack alignItems="center" gap="1rem" className="investBtn">
              <i className="ri-stock-line ri-5x"></i>
              <Typography variant="h5" color="white">
                Invest
              </Typography>
              <Typography variant="body1" color="#78BDF1" textAlign="center">
                Full-fledged stock trading application which is live for
                trading. Implemented features like payment gateway, charts, live
                notifications.
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => this.handleClick(e, "invest")}
                fullWidth={xs ? true : false}
              >
                Explore <i className="ri-arrow-right-up-line" />
              </Button>
            </Stack>
            <Stack alignItems="center" gap="1rem" className="investBtn">
              <i className="ri-user-follow-line ri-5x"></i>
              <Typography variant="h5" color="white">
                Welcome
              </Typography>
              <Typography variant="body1" color="#78BDF1" textAlign="center">
                Developed & deployed a responsive login microsite. Implemented
                QR login feature apart from email/mobile number or username.
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => this.handleClick(e, "welcome")}
                fullWidth={xs ? true : false}
              >
                Explore <i className="ri-arrow-right-up-line" />
              </Button>
            </Stack>
            <Stack alignItems="center" gap="1rem" className="investBtn">
              <i className="ri-openai-line ri-5x"></i>
              <Typography variant="h5" color="white">
                Chanakya AI
              </Typography>
              <Typography variant="body1" color="#78BDF1" textAlign="center">
                An AI chatbot uses chatGPT to help resolve any banking related
                queries, replaced AHA Chatbot with chanakya in axis bank
                products.
              </Typography>
              <Button
                variant="contained"
                // onClick={(e) => this.handleClick(e, "chana")}
                fullWidth={xs ? true : false}
              >
                Available Soon!
                {/* Explore <i className="ri-arrow-right-up-line" /> */}
              </Button>
            </Stack>
          </Stack>
          <Typography
            variant="h5"
            color="#40A6DD"
            textAlign="center"
            p="2rem 0rem 0rem 0rem"
          >
            PERSONAL PROJECTS
          </Typography>
          <Stack flexDirection={xs ? "column" : "row"} gap="2rem">
            <Stack
              alignItems="center"
              gap="1rem"
              className="investBtn"
              flex="1"
            >
              <i className="ri-edge-new-line ri-5x"></i>
              <Typography variant="h5" color="white">
                Crisp
              </Typography>
              <Typography variant="body1" color="#78BDF1" textAlign="center">
                Crafted an React template using parcel, typescript and redux. It
                is feature rich and easy to install. Infact this portfolio
                website is created using Crisp template.
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => this.handleClick(e, "crisp")}
                fullWidth={xs ? true : false}
              >
                Check github <i className="ri-arrow-right-up-line" />
              </Button>
            </Stack>
            <Stack
              alignItems="center"
              gap="1rem"
              className="investBtn"
              flex="1"
            >
              <i className="ri-community-line ri-5x"></i>
              <Typography variant="h5" color="white">
                Donation App
              </Typography>
              <Typography variant="body1" color="#78BDF1" textAlign="center">
                A web application for fund raisers. I worked with a team of
                three techies to create an simple yet powerful portal for
                charity & donation.
              </Typography>
              <Button
                variant="contained"
                onClick={(e) => this.handleClick(e, "donation")}
                fullWidth={xs ? true : false}
              >
                Check github <i className="ri-arrow-right-up-line" />
              </Button>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            onClick={(e) => this.handleClick(e, "skill")}
            fullWidth={xs ? true : false}
            sx={{ marginTop: "1.5rem" }}
            className="skillsBtn"
          >
            Checkout My Skills <i className="ri-arrow-right-line" />
          </Button>
        </Stack>
      </Box>
    );
  }
}

export default withBreakpoint(withRouter(Projects));
