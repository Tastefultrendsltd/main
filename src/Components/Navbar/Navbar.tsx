import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
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
  handleNav = (e: React.MouseEvent<HTMLButtonElement>, path: string) => {
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
          background: "white",
          boxShadow: "0px 2px 12px #01183b",
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            color: "#01183b",
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "monospace",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          Shaikh Javed
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
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/projects">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
          <i className="ri-menu-line" style={{ color: "#01183b" }} />
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
          <MenuItem onClick={(e) => this.handleNav(e, "/")}>Home</MenuItem>
          <MenuItem onClick={(e) => this.handleNav(e, "/experience")}>
            Experience
          </MenuItem>
          <MenuItem onClick={(e) => this.handleNav(e, "/projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={(e) => this.handleNav(e, "/skills")}>
            Skills
          </MenuItem>
          <MenuItem onClick={(e) => this.handleNav(e, "/contact")}>
            Contact
          </MenuItem>
        </Menu>
      </Stack>
    );
  }
}
export default withRouter(Navbar);
