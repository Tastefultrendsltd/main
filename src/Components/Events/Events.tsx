import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BreakpointProps } from "~/src/Utils/withBreakpoint/withBreakpoint";
import "./Events.css";

const pastEvents = [
  {
    id: 1,
    title: "Past Event 1",
    videoUrl: "/assets/videos/VID01.mp4", // Replace with the actual video URL
  },
  {
    id: 2,
    title: "Past Event 2",
    videoUrl: "/assets/videos/VID02.mp4", // Replace with the actual video URL
  },
  {
    id: 3,
    title: "Past Event 3",
    videoUrl: "/assets/videos/VID03.mp4", // Replace with the actual video URL
  },
  {
    id: 4,
    title: "Past Event 4",
    videoUrl: "/assets/videos/VID04.mp4", // Replace with the actual video URL
  },
];
interface EventsProps {
  breakpoint: Readonly<BreakpointProps>;
}
const Events: React.FC<EventsProps> = (props) => {
  // const handleGalleryOpen = (eventId: any) => {
  //   // Logic to open the gallery view for the selected event
  //   console.log(`Opening gallery for event ID: ${eventId}`);
  // };

  const handleLiveEventOpen = () => {
    window.open(process.env.LIVE_EVENT_URL, "_blank");
  };
  const { breakpoint } = props;
  const { xs, sm } = breakpoint;
  const isMobile = xs || sm;

  return (
    <Box m="1rem" border="1px solid #7D0A0A" borderRadius="5px">
      <Box p="1rem">
        <Typography variant="h4" gutterBottom>
          Events
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={isMobile ? "column" : "row"}
          gap="1rem"
        >
          <Box width="75%">
            <Typography variant="h5" gutterBottom>
              Past Events
            </Typography>
            <Box
              display={"grid"}
              gridTemplateColumns="repeat(2, 1fr)"
              gap="1rem"
            >
              {pastEvents.map((event) => (
                <Box key={event.id}>
                  <video
                    src={event.videoUrl}
                    controls
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <Typography variant="h6">{event.title}</Typography>
                  {/* <Button
                  variant="contained"
                  onClick={() => handleGalleryOpen(event.id)}
                >
                Details
                </Button> */}
                </Box>
              ))}
            </Box>
          </Box>
          <Box width="15%">
            <Typography variant="h5" gutterBottom>
              Live Event
            </Typography>
            <Button variant="contained" onClick={handleLiveEventOpen}>
              Watch Live
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
