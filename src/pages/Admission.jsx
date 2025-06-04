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

const eligibilityRequirements = [
  "+2 or intermediate or equivalent level with minimum of 40% in aggregate or CGPA of 1.6 (out of 4.0) and minimum ‘D+’ grade in each subject in a study program of at least two-year duration in any discipline from a university/board recognized by Kathmandu University",
  "GCE Advanced Level students who have passed minimum three subjects in A Level and one general paper in AS Level with marks/grades requirements as mentioned above",
  "International Baccalaureate (IB) students who have passed minimum 6 courses (at least 3 courses in Higher Level) with 24 points in aggregate",
  "CTEVT students should have a three-year diploma with 40% in aggregate.",
  "CBSE students should have minimum 40% in aggregate",
];

const applicationSteps = [
  {
    label: "Complete High School with minimum 40%",
    description:
      "Applicants must have completed their high school education with at least 40% aggregate marks.",
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
          {eligibilityRequirements.map((item, idx) => (
            <ListItem key={idx} sx={{ pl: 0 }}>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Note:</strong>
        </Typography>
        <List>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText primary="Ten percent of the seats are reserved for foreign students." />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText primary="Applicants who have appeared in 12th grade examination may apply on a provisional basis." />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText primary="Applicants accepted provisionally must satisfy above eligibility criteria to continue their study." />
          </ListItem>
          <ListItem sx={{ pl: 0 }}>
            <ListItemText primary="Should appear and pass KUUMAT test." />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Admission;
