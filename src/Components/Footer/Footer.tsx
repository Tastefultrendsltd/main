import React from "react";
import { Box } from "@mui/material";
import withBreakpoint from "~/src/Utils/withBreakpoint/withBreakpoint";
export const Footer = () => {
  return (
    <Box
      id="Footer"
      sx={{
        bottom: 0,
        height: "20rem",
        borderRadius: "5px",
        position: "fixed",
        border: "5px red solid",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      footer
    </Box>
  );
};

export default withBreakpoint(Footer);
