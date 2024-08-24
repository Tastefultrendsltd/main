import React, { Component } from "react";
// import { enqueNotistack } from "../../Utils/enqueNotistack/enqueNotistack";
import { Typography, Box, Stack, Button } from "@mui/material";
import "./Home.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
interface IHomeProps extends WithRouterProps {}

class Home extends Component<IHomeProps> {
  componentDidMount(): void {
    // enqueNotistack()
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const { navigate } = this.props;
    navigate(type);
  };
  render() {
    return (
      <Stack
        gap="1rem"
        p="3rem 1rem 3rem 1rem"
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box
          className="home"
          sx={{
            height: { md: "35vw", xs: "60vw" },
            width: { md: "48vw", xs: "90vw" },
          }}
        ></Box>
        <Stack
          flexDirection="column"
          sx={{ width: { md: "48vw", xs: "94vw" } }}
        >
          <Typography variant="h3" color="#01183b">
            Hi, I am Shaikh Javed!
          </Typography>
          <Typography variant="h5" color="#40A6DD">
            Full Stack Developer
          </Typography>
          <Typography variant="body1" color="#01183b">
            Currently, I’m a front-end developer at Axis Securities Ltd. I
            graduated with a Bachelor of Engineering in Mechanical Engineering.
            I have 3+ years of experience in TypeScript, JavaScript, CSS, and
            HTML, specializing in ReactJS and Redux. I excel in creating
            web-based applications and have a strong grasp of REST APIs, Agile
            methodologies, and software development principles. On my website,
            you will find my work experience, favorite projects, and skillsets.
            Please reach out to me via LinkedIn if you want to chat!
          </Typography>
          <Stack
            flexDirection="row"
            gap="1rem"
            sx={{ p: "1rem 0rem 0rem 0rem" }}
          >
            <Button
              variant="contained"
              onClick={(e) => this.handleClick(e, "experience")}
              fullWidth
              className="experiennceBtn"
            >
              See Experience <i className="ri-arrow-right-line" />
            </Button>
            <Button
              onClick={(e) => this.handleClick(e, "contact")}
              variant="outlined"
              fullWidth
            >
              Hire Me!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
export default withRouter(Home);
