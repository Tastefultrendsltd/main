import { Box } from "@mui/material";
import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";

export default class Loader extends Component {
  render() {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="85vh"
      >
        <ScaleLoader color="#40A6DD" radius={100} speedMultiplier={3} />
      </Box>
    );
  }
}
