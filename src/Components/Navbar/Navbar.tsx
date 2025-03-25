import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import "./Navbar.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
import { Link } from "react-scroll";
interface INavbarProps extends WithRouterProps {}
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
          <Link to="home" smooth={true} duration={500}>
            TasteFul Trends
          </Link>
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
          }}
        >
          <Link to="Events" smooth={true} duration={500}>
            Events
          </Link>
          <Link to="ContactUs" smooth={true} duration={500}>
            Contact Us
          </Link>
          <Link to="AboutUs" smooth={true} duration={500}>
            About Us
          </Link>
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
          <i className="ri-menu-line" style={{ color: "#7D0A0A" }} />
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
        </Menu>
      </Stack>
    );
  }
}
export default withRouter(Navbar);
