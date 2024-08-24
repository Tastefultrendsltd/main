import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import { inherits } from "util";
interface ICustomCarouselProps {
  items: any[];
  height?: string;
  width?: string;
}

class CustomCarousel extends Component<ICustomCarouselProps> {
  render() {
    const { items, height = "40vh", width = "40vw" } = this.props;
    return (
      <Carousel
        animation="slide"
        sx={{
          width: width,
          height: "16rem",
        }}
      >
        {items.map((item, i) => (
          <img
            src={item.src}
            alt={item.alt}
            style={{
              objectFit: "fill",
              width: "-webkit-fill-available",
              height: height,
            }}
          />
        ))}
      </Carousel>
    );
  }
}

export default CustomCarousel;
