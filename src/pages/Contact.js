import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      // IMPORTANT: REPLACE WITH THE KEY YOU GOT IN YOUR EMAIL
      access_key: "773c2459-8214-4385-b95d-8437a1c86d36",
    };

    setResponseMessage("Sending...");
    setIsError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (res.success) {
        setResponseMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setIsError(true);
        setResponseMessage(res.message || "An error occurred.");
      }
    } catch (error) {
      setIsError(true);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          mx: "auto",
          width: { xs: "90%", sm: "70%", md: "50%" },
          "& h4": { fontWeight: "bold", mb: 2, textAlign: "center" },
        }}>
        <Typography variant="h4">Contact Us</Typography>
        <Paper component="form" onSubmit={handleSubmit} sx={{ p: 4, mt: 2 }}>
          <TextField
            required
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            type="email"
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "black",
              "&:hover": { bgcolor: "goldenrod" },
            }}>
            Send Message
          </Button>
          {responseMessage && (
            <Alert severity={isError ? "error" : "success"} sx={{ mt: 3 }}>
              {responseMessage}
            </Alert>
          )}
        </Paper>
      </Box>
    </Layout>
  );
};

export default Contact;
