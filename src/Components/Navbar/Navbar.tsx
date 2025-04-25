import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-scroll";
import { setTheme, T_THEME } from "~/src/redux/AppSlice";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import "./Navbar.css";
interface INavbarProps extends WithRouterProps, PropFromRedux {}
interface INavbarState {
  anchorEl: null | HTMLElement;
}
class Navbar extends Component<INavbarProps, INavbarState> {
  constructor(props: INavbarProps) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  toggleTheme = () => {
    const { setTheme, theme } = this.props;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleNav = (e: React.MouseEvent<HTMLLIElement>, path: string) => {
    this.handleClose();
    const { navigate } = this.props;
    navigate(path);
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { theme } = this.props;
    return (
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        height="3rem"
        top="0"
        position="sticky"
        p="0 1rem 0 1rem"
        sx={{
          background: "#7D0A0A",
          boxShadow: "0px 2px 12px #7D0A0A",
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "monospace",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          TasteFul Trends
        </Typography>
        <Stack
          flexDirection="row"
          gap="1.1rem"
          p="0.5rem 1rem 0 0rem"
          sx={{
            color: "white",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "monospace",
            transition: "3s",
            display: { sm: "inherit", xs: "none" },
            "&.a": {
              textDecoration: "none",
              color: theme === "light" ? "#fff" : "#000",
            },
          }}
        >
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="Events" smooth={true} duration={500}>
            Events
          </Link>
          <Link to="ContactUs" smooth={true} duration={500}>
            Contact Us
          </Link>
          <Link to="AboutUs" smooth={true} duration={500}>
            About Us
          </Link>
          <Box
            className="ri-contrast-2-line"
            onClick={this.toggleTheme}
            fontSize={"1.3rem"}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <IconButton
          aria-label="more"
          id="menu"
          aria-controls={open ? "menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          sx={{
            display: { sm: "none", xs: "inherit" },
          }}
        >
          <i className="ri-menu-line" style={{ color: "white" }} />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            display: { sm: "none", xs: "inherit" },
          }}
        >
          <MenuItem color="red">
            <Link to="Home" smooth={true} duration={500}>
              <Typography>Home</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="Events" smooth={true} duration={500}>
              Events
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="ContactUs" smooth={true} duration={500}>
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="AboutUs" smooth={true} duration={500}>
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={this.toggleTheme}>
            <Box
              className="ri-contrast-2-line"
              fontSize={"1.3rem"}
              sx={{ cursor: "pointer" }}
            />
            <Typography ml="0.5rem">
              {theme === "light" ? "dark" : "light"}
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.AppState.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  setTheme: (theme: T_THEME) => dispatch(setTheme(theme)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropFromRedux = ConnectedProps<typeof connector>;
export default connector(withRouter(Navbar));
