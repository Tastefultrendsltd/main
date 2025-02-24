import React, { Component } from "react";
// import { enqueNotistack } from "../../Utils/enqueNotistack/enqueNotistack";
import { Typography, Box, Stack, Button } from "@mui/material";
import "./Home.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
interface IHomeProps extends WithRouterProps, BreakpointProps {}

class Home extends Component<IHomeProps> {
  componentDidMount(): void {
    // enqueNotistack()
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const { navigate } = this.props;
    navigate(type);
  };
  handleSocial = (type: string) => {
    if (type == "leetcode") {
      window.open("https://leetcode.com/skjaved");
    }
    if (type == "hacker") {
      window.open("https://www.hackerrank.com/skjaved633");
    }
    if (type == "github") {
      window.open("https://github.com/shaikhjavedofficial");
    }
  };
  render() {
    const { xs, md, sm } = this.props;
    return (
      <Stack
        gap="1rem"
        p="3rem 1rem 3rem 1rem"
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          className="home"
          sx={{
            height: { md: "35vw", xs: "75vw" },
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
          <Typography variant="h5" pt="2rem" color="#01183b" fontWeight="700">
            Links
          </Typography>
          <Typography variant="body1" pt="1rem">
            checkout my profile on coding platforms and have a look at my
            contributions
          </Typography>
          <Stack flexDirection={xs ? "column" : "row"} pt="1rem" gap="1rem">
            <Button
              onClick={() => this.handleSocial("leetcode")}
              variant="outlined"
              fullWidth
            >
              LeetCode
            </Button>
            <Button
              onClick={() => this.handleSocial("hacker")}
              variant="outlined"
              fullWidth
            >
              HackerRank
            </Button>
            <Button
              onClick={() => this.handleSocial("github")}
              variant="outlined"
              fullWidth
            >
              GitHub
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
export default withBreakpoint(withRouter(Home));
