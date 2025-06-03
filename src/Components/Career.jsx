// src/components/Career.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const jobOpenings = [
  {
    title: "Frontend Developer",
    description:
      "Join our development team to build modern web apps using React, MUI, and other cutting-edge tech.",
    location: "Kathmandu, Nepal",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    description:
      "Drive our digital campaigns and social media presence to help our clients grow.",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and engaging user interfaces for web and mobile applications.",
    location: "Kathmandu, Nepal",
    type: "Full-time",
  },
];

const Career = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [message, setMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !cvFile) {
      setMessage("Please fill all fields and attach your CV.");
      setSubmitSuccess(false);
      return;
    }

    // For demo: just show success message. Real app would upload file to server
    setMessage("Thank you for your application! We will get back to you soon.");
    setSubmitSuccess(true);

    // Reset form
    setName("");
    setEmail("");
    setCvFile(null);
    e.target.reset();
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
          Career Opportunities
        </Typography>

        {/* Job Openings */}
        <Box sx={{ mb: 8 }}>
          {jobOpenings.map(({ title, description, location, type }) => (
            <Paper
              key={title}
              elevation={4}
              sx={{
                p: 4,
                mb: 3,
                borderRadius: 3,
                boxShadow:
                  "0 6px 20px rgba(42, 47, 67, 0.1), 0 4px 14px rgba(42, 47, 67, 0.07)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
                {description}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Location: {location} | Type: {type}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Application Form */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            color: "#2a2f43",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Apply Now
        </Typography>

        {message && (
          <Alert
            severity={submitSuccess ? "success" : "error"}
            sx={{ mb: 3 }}
            onClose={() => setMessage("")}
          >
            {message}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            component="label"
            sx={{ alignSelf: "flex-start" }}
          >
            Upload CV (PDF, max 5MB)
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={(e) => setCvFile(e.target.files[0])}
            />
          </Button>
          {cvFile && (
            <Typography variant="body2" sx={{ mt: -2 }}>
              Selected File: {cvFile.name}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#2a2f43",
              "&:hover": { bgcolor: "#24304a" },
            }}
          >
            Submit Application
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Career;
