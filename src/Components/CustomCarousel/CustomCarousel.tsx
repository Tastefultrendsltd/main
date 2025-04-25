import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

interface ICustomCarouselProps {
  items: { src: string; alt: string }[];
}

const CustomCarousel: React.FC<ICustomCarouselProps> = ({ items }) => {
  return (
    <Carousel
      animation="slide"
      sx={{ width: "100%", height: "60vh", marginBottom: "1rem" }}
    >
      {items.map((item, index) => (
        <Paper key={index}>
          <img
            src={item.src}
            alt={item.alt}
            style={{
              objectFit: "fill",
              width: "100%",
              height: "60vh",
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
