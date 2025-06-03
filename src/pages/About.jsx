// src/components/AboutUs.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Button,
  Stack,
} from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontWeight: "700", mb: 1 }}
        >
          About
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

        <Divider sx={{ mb: { xs: 6, md: 10 } }} />

        {/* About Program + Image */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: { xs: 8, md: 12 } }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              About the BAM Program
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              The Bachelor of Aviation Management (BAM) at Siddhartha Vanasthali
              College is designed to prepare future leaders in the aviation
              industry. The program integrates aviation operations, management
              principles, and safety protocols to provide a comprehensive
              education.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Students gain hands-on experience through industry partnerships,
              internships, and access to advanced simulation labs. Graduates are
              equipped for diverse roles in airline management, airport
              operations, and aviation consultancy.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "700", mt: 5, mb: 2 }}>
              Kathmandu University at Siddhartha Vanasthali Institute
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Affiliated with Kathmandu University, Siddhartha Vanasthali
              Institute offers recognized degrees backed by rigorous academic
              standards. The campus fosters a supportive learning environment
              amidst serene surroundings with modern amenities.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: { xs: 8, md: 12 } }} />

        {/* Expanded Program Details */}
        <Box sx={{ maxWidth: 900, mx: "auto", mb: { xs: 8, md: 12 } }}>
          <Typography variant="h5" sx={{ fontWeight: "700", mb: 3 }}>
            Program Highlights
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "text.secondary",
              mb: 4,
              pl: 3,
              "& li": { mb: 1.2, lineHeight: 1.6 },
            }}
          >
            <li>
              Industry-aligned curriculum meeting global aviation standards.
            </li>
            <li>Internship and placement opportunities with top airlines.</li>
            <li>
              Access to aviation simulation labs and modern training tools.
            </li>
            <li>
              Experienced faculty blending academic and professional expertise.
            </li>
            <li>Focus on aviation safety and regulatory compliance.</li>
            <li>
              Workshops, seminars, and networking with aviation professionals.
            </li>
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "700", mb: 3 }}>
            Admission Requirements
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "text.secondary",
              mb: 4,
              pl: 3,
              "& li": { mb: 1.2, lineHeight: 1.6 },
            }}
          >
            <li>Completion of 10+2 or equivalent secondary education.</li>
            <li>Minimum grades as prescribed by the college.</li>
            <li>Entrance examination and personal interview.</li>
            <li>English language proficiency for non-native speakers.</li>
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "700", mb: 3 }}>
            Quick Links
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            {[
              { label: "Admission Details", href: "#" },
              { label: "Course Curriculum", href: "#" },
              { label: "Faculty & Staff", href: "#" },
              { label: "Student Resources", href: "#" },
            ].map(({ label, href }) => (
              <Button
                key={label}
                variant="outlined"
                color="primary"
                href={href}
                sx={{ minWidth: 150 }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
