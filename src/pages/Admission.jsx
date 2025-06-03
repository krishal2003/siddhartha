// src/pages/Admission.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const admissionRequirements = [
  "Completed high school (10+2) or equivalent",
  "Minimum 60% aggregate marks in high school",
  "Submit official transcripts and mark sheets",
  "Passport-sized photographs (2 copies)",
  "Valid government-issued ID",
  "Letter of intent explaining interest in program",
];

const applicationSteps = [
  {
    label: "Complete High School with minimum 60%",
    description:
      "Applicants must have completed their high school education with at least 60% aggregate marks.",
  },
  {
    label: "Fill out the Online Application Form",
    description:
      "Visit our website and fill out the detailed application form with accurate information.",
  },
  {
    label: "Upload Required Documents",
    description:
      "Upload your transcripts, photographs, government ID, and other necessary documents.",
  },
  {
    label: "Pay Application Fee",
    description:
      "Submit the non-refundable application fee through our secure payment portal.",
  },
  {
    label: "Attend Interview / Entrance Exam",
    description:
      "Appear for the scheduled interview or entrance examination conducted by the institute.",
  },
  {
    label: "Receive Admission Decision",
    description:
      "You will receive an admission confirmation or rejection within 2 weeks of the interview/exam.",
  },
  {
    label: "Enroll and Submit Tuition Fees",
    description:
      "Successful candidates must complete enrollment by submitting tuition fees before the deadline.",
  },
];

const Admission = () => {
  return (
    <Container sx={{ py: 6, mt: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
      >
        Admission
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Bachelor of Aviation Management
      </Typography>
      {/* Overview */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
          Overview{" "}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ lineHeight: 1.7 }}
        >
          Siddartha Vanasthali Institute is dedicated to fostering academic
          excellence and career readiness. Our admission process ensures that
          motivated and qualified students join our community to pursue the
          Bachelor of Aviation Management. We welcome applicants who demonstrate
          a strong academic background and passion for aviation.
        </Typography>
      </Grid>

      {/* Application Process */}
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2, backgroundColor: "#f9f9f9", mt: 4 }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" mb={3}>
          Application Process
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center">
          {applicationSteps.map((step, idx) => (
            <Box key={idx} sx={{ textAlign: "center", maxWidth: 600 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {step.label}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {step.description}
              </Typography>
              {idx !== applicationSteps.length - 1 && (
                <ArrowDownwardIcon
                  sx={{ fontSize: 30, color: "#1976d2", mb: 2 }}
                  aria-hidden="true"
                />
              )}
            </Box>
          ))}
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{ p: 4, mb: 6, borderRadius: 2, backgroundColor: "#f9f9f9", mt: 6 }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Admission Requirements
        </Typography>
        <List>
          {admissionRequirements.map((item, idx) => (
            <ListItem key={idx} sx={{ pl: 0 }}>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Admission;
