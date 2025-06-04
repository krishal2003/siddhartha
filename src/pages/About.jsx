// src/components/AboutUs.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import {
  AirportShuttle,
  FlightTakeoff,
  Security,
  School,
  AccountBalance,
  TrendingUp,
  Work,
  PeopleAlt,
} from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontWeight: "700", mb: 1, mt: 1 }}
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
              Bachelor of Aviation Management (BAM) is a program from
              internationally accredited Kathmandu University, launched by
              renowned aviation entity Annapurna Ventures in collaboration with
              the reputable Siddhartha Vanasthali Institute, Panauti.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.7 }}
            >
              Bachelor of Aviation Management (BAM) is a four-year undergraduate
              program that provides you with the skills and knowledge to
              effectively manage aviation operations, airlines, and airports.
              This program is for you if you seek success in Nepal’s rapidly
              growing industry because of its comprehensive training integrated
              with industry experience, educational legacy, and academic
              excellence. Collaboration of renowned education institutions
              Kathmandu University and Siddhartha Vanasthali with Annapurna
              Ventures, a major force in Nepal’s aviation sector, makes BAM the
              best program for future aviation leaders .
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

        <Divider sx={{ mb: { xs: 8, md: 7 } }} />

        {/* Your Future Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", mb: 4, textAlign: "center" }}
        >
          Your Future
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", mb: 3, textAlign: "center" }}
        >
          As a graduate of the program, you can pursue various careers in the
          aviation industry that is blooming globally.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
            mb: { xs: 8, md: 12 },
          }}
        >
          {/* Career Path - Airport Management */}
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <AirportShuttle sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Airport Management
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Airport Operations Manager
              <br />
              • Airport Security Manager
              <br />• Airport Facilities Manager
            </Typography>
          </Box>

          {/* Career Path - Airline Management */}
          <Box
            sx={{
              backgroundColor: "#e8f4f8",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <FlightTakeoff sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Airline Management
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Airline Operations Manager
              <br />
              • Revenue Management Analyst
              <br />• Customer Service Manager
            </Typography>
          </Box>

          {/* Career Path - Aviation Safety and Security */}
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Security sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Aviation Safety and Security
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Aviation Safety Inspector
              <br />• Safety Manager
            </Typography>
          </Box>

          {/* Career Path - Aviation Consulting */}
          <Box
            sx={{
              backgroundColor: "#e1eaf3",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <School sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Aviation Consulting
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Aviation Consultant
              <br />• Regulatory Affairs Specialist
            </Typography>
          </Box>

          {/* Career Path - Aircraft Leasing and Finance */}
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <AccountBalance sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Aircraft Leasing and Finance
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Leasing Manager
              <br />• Finance Analyst
            </Typography>
          </Box>

          {/* Career Path - Air Traffic Management */}
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <TrendingUp sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Air Traffic Management
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Air Traffic Controller
              <br />• Air Traffic Management Specialist
            </Typography>
          </Box>

          {/* Career Path - Government and Regulatory Bodies */}
          <Box
            sx={{
              backgroundColor: "#e8f4f8",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Work sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Government and Regulatory Bodies
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Aviation Policy Analyst
              <br />• Regulatory Compliance Manager
            </Typography>
          </Box>

          {/* Career Path - Aviation Logistics */}
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              flex: "1 1 calc(33.333% - 16px)", // Adjusts width and adds gap
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <PeopleAlt sx={{ fontSize: 40, color: "#2a2f43", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>
              Aviation Logistics
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              • Logistics Manager
              <br />• Supply Chain Coordinator
            </Typography>
          </Box>
        </Box>

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
