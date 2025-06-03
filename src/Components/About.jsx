// src/components/AboutUs.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const teamMembers = [
  {
    name: "Sita Sharma",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ram Thapa",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Koirala",
    role: "Digital Marketing Head",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Bikash Gurung",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Our Story Section */}
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#2a2f43",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            letterSpacing: 1,
          }}
        >
          Our Story
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mx: "auto",
            mb: { xs: 8, md: 12 },
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          Founded with a passion for technology and innovation, Uddheshya has
          grown into a leading provider of IT solutions, digital marketing, app
          development, and web design. Our mission is to empower businesses to
          thrive in the digital era by delivering tailor-made solutions with
          quality and integrity.
        </Typography>

        {/* Our Team Section */}
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#2a2f43",
            textAlign: "center",
            mb: 6,
            letterSpacing: 1,
          }}
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {teamMembers.map(({ name, role, image }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  maxWidth: 280,
                  borderRadius: 4,
                  textAlign: "center",
                  boxShadow:
                    "0 10px 25px rgba(42, 47, 67, 0.12), 0 8px 30px rgba(42, 47, 67, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 15px 40px rgba(42, 47, 67, 0.2), 0 12px 50px rgba(42, 47, 67, 0.15)",
                  },
                  cursor: "default",
                }}
              >
                <Avatar
                  alt={name}
                  src={image}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 3 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", color: "#2a2f43", mb: 1 }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#555", fontStyle: "italic" }}
                >
                  {role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
