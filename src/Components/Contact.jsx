// src/components/Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ message: "", severity: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill in all required fields.",
        severity: "error",
      });
      return;
    }

    // Simulate successful submission
    setFormStatus({
      message: "Thank you for reaching out! We'll get back to you soon.",
      severity: "success",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#2a2f43",
            textAlign: "center",
            mb: 6,
            letterSpacing: 1,
          }}
        >
          Contact Us
        </Typography>

        <Grid>
          {/* Contact Form */}
          <Grid>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
              {formStatus.message && (
                <Alert
                  severity={formStatus.severity}
                  sx={{ mb: 3 }}
                  onClose={() => setFormStatus({ message: "", severity: "" })}
                >
                  {formStatus.message}
                </Alert>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  label="Name *"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Email *"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  label="Message *"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#2a2f43",
                    "&:hover": { bgcolor: "#24304a" },
                    alignSelf: "flex-start",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
