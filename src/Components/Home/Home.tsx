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
        p="1rem"
        alignItems='center'
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
          <Typography variant="h3" color='white'>Hi, I am Shaikh Javed</Typography>
          <Typography variant="h5" color='cyan'>Full Stack Developer</Typography>
          <Typography variant="body1" color='white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            expedita assumenda cumque, architecto, officiis repellendus
            voluptates harum sint temporibus illo, tempore voluptatibus aliquid.
            Maxime aliquam voluptate nemo, rerum recusandae iste.
          </Typography>
          <Stack flexDirection="row" gap="1rem" sx={{p:"1rem 0rem 0rem 0rem"}}>
            <Button
              variant="contained"
              onClick={(e) => this.handleClick(e, "experience")}
              fullWidth
            >
              See Experience <i color="white" className="ri-arrow-right-line" />{" "}
            </Button>
            <Button
              onClick={(e) => this.handleClick(e, "contact")}
              variant='outlined'
              fullWidth>
              Contact Me!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
export default withRouter(Home);
