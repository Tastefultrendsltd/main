import { Box, Typography } from "@mui/material";

const Footer = (props: any) => {
  const { breakpoint } = props;
  const { xs, sm } = breakpoint;
  const isMobile = xs || sm;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      // border="1px solid #7D0A0A"
      borderRadius="5px 5px 0 5px"
      sx={{
        border: "2px solid rgba(125, 10, 10, 0.5)",
        boxShadow: "0px -10px 10px rgba(0, 0, 0, 0.25)", // Shadow effect
        backdropFilter: "blur(50px)",
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "1rem",
        }}
        gap="2rem"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box
          borderRadius="5px"
          border="1px solid #7D0A0A"
          p="1rem"
          gap="0.5rem"
          display="flex"
          flexDirection="column"
          flex="1"
        >
          <Typography variant="h6">Location</Typography>
          <iframe
            src={process.env.ADDRESS}
            width="100%"
            height="90%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
        <Box
          sx={{ textAlign: "justify" }}
          borderRadius="5px"
          border="1px solid #7D0A0A"
          p="1rem"
          gap="0.5rem"
          display="flex"
          flexDirection="column"
          flex="1"
        >
          <Typography variant="h6">About Us</Typography>
          <Typography>
            Catering to your every need, TasteFul Trends is a premier catering
            service that specializes in creating unforgettable culinary
            experiences. With a passion for food and a commitment to excellence,
            we bring your vision to life with our exquisite menus and impeccable
            service. Our team of talented chefs and dedicated staff work
            tirelessly to ensure that every event is a resounding success.
            Whether it's an intimate gathering or a grand celebration, we take
            pride in delivering exceptional quality and attention to detail. At
            TasteFul Trends, we understand that food is an integral part of any
            event, and we strive to create a memorable dining experience for you
            and your guests. Contact us today to learn more about our services
            and how we can help you create an unforgettable culinary experience.
          </Typography>
        </Box>
      </Box>
      <Typography>
        © 2023 TasteFul Trends EST 2010. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
