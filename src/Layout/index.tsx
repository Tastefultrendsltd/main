import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline } from "@mui/material";
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import App from "../App";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { AppStateSelector } from "../redux/AppSlice";
import withBreakpoint, {
  BreakpointProps,
} from "../Utils/withBreakpoint/withBreakpoint";

interface LayoutProps extends PropFromRedux, BreakpointProps {}

export class Layout extends Component<LayoutProps> {
  render() {
    const breakpointProps = this.props;
    const theme = createTheme({
      palette: {
        mode: this.props.getTheme,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              color: "#fff",
              backgroundColor: "#7D0A0A",
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              color: this.props.getTheme === "dark" ? "#fff" : "#000",
              backgroundColor: this.props.getTheme === "dark" ? "#333" : "#fff",
            },
          },
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <App />
        <Box id="AboutUs">
          <Footer breakpoint={breakpointProps} />
        </Box>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: any) => {
  const getTheme = AppStateSelector(state);
  return {
    getTheme,
  };
};

const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropFromRedux = ConnectedProps<typeof connector>;
export default connector(withBreakpoint(Layout));
