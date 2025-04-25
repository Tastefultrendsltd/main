import { Box, Button, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { enqueNotistack } from "~/src/Utils/enqueNotistack/enqueNotistack";
import "./Contact.css";
const Contact = (props: any) => {
  const [formData, setFormData] = useState<{
    name: string;
    contactNumber: string;
    email: string;
    date: string | null;
    address: string;
  }>({
    name: "",
    contactNumber: "",
    email: "",
    date: null,
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (newDate: Dayjs | null) => {
    setFormData({ ...formData, date: newDate?.format("YYYY-MM-DD") || null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = process.env.API_URL;
    try {
      await axios.post(`${url}/contact`, {
        ...formData,
        date: formData.date ? formData.date : null,
      });
      enqueNotistack("Request recieved successfully", "success");
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        date: null,
        address: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      enqueNotistack("Failed to send your request. Please try again.");
    }
  };
  const { breakpoint } = props;
  const { xs, sm } = breakpoint;
  const isMobile = xs || sm;
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      padding="1rem"
      gap="2rem"
      margin="1rem 0 1rem 0"
    >
      <Box flex={1} borderRadius="5px" border="1px solid #7D0A0A" p="1rem">
        <Typography variant="h4" gutterBottom>
          Request a callback
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="contactNumber"
            label="Contact Number"
            variant="outlined"
            margin="normal"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={dayjs(formData.date)}
                onChange={handleDateChange}
                label="Date Of Event"
                closeOnSelect
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            fullWidth
            name="address"
            label="Place of Event"
            variant="outlined"
            margin="normal"
            value={formData.address}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            sx={{
              background: "#7D0A0A",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box
        flex={1}
        gap="1rem"
        display="flex"
        flexDirection="column"
        alignContent="center"
        borderRadius="5px"
        p="1rem"
        border="1px solid #7D0A0A"
      >
        <Typography variant="h4" gutterBottom>
          Contact Details
        </Typography>
        <Typography variant="body1" fontSize={"1.2rem"}>
          Email Us:{" "}
          <a
            href="mailto:tastefultrendsltd@gmail.com"
            style={{ color: "#7D0A0A", textDecoration: "none" }}
          >
            tastefultrendsltd@gmail.com
          </a>
        </Typography>
        <Box display="flex" flexDirection="row" gap="1rem" alignItems="center">
          <Box>
            <Typography fontSize={"1.2rem"} variant="body1">
              Proprietor: YASEEN KHAN
            </Typography>
            <Typography fontSize={"1.2rem"} variant="body1">
              Phone: {}
              <a
                href="tel:9949429447"
                style={{ color: "#7D0A0A", textDecoration: "none" }}
              >
                9949429447
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50%",
              width: "0.1rem",
              backgroundColor: "#7D0A0A",
            }}
          />
          <Box>
            <Typography fontSize={"1.2rem"} variant="body1">
              Master CHEF: MOHD ASIF
            </Typography>
            <Typography fontSize={"1.2rem"} variant="body1">
              Phone:{" "}
              <a
                href="tel:9390088026"
                style={{ color: "#7D0A0A", textDecoration: "none" }}
              >
                9390088026
              </a>
            </Typography>
          </Box>
        </Box>
        <Typography fontSize={"1.2rem"} variant="body1">
          Address: 22/2/389 NOOR KHAN BAZAR DABEERPURA HYDERABAD
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
