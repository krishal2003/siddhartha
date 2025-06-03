// src/pages/HomePage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import HeroSection from "./HeroSection";

const services = [
  {
    title: "IT Solutions",
    description:
      "Tailored IT infrastructure and support that keeps your business running smoothly and securely.",
    icon: <CodeIcon sx={{ fontSize: 50, color: "#2a2f43" }} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies to grow your brand, boost engagement, and maximize ROI.",
    icon: <MarketingIcon sx={{ fontSize: 50, color: "#2a2f43" }} />,
  },
  {
    title: "App Development",
    description:
      "User-focused mobile and web apps designed for performance, usability, and scalability.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 50, color: "#2a2f43" }} />,
  },
  {
    title: "Web Development",
    description:
      "Modern responsive websites crafted to convert visitors into loyal customers.",
    icon: <LanguageIcon sx={{ fontSize: 50, color: "#2a2f43" }} />,
  },
];

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <HeroSection />

      <Container sx={{ py: 5 }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 6,
            color: "#2a2f43",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          What We Offer
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {services.map(({ title, description, icon }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={title}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  maxWidth: 320,
                  borderRadius: 3,
                  boxShadow:
                    "0 8px 16px rgba(42, 47, 67, 0.1), 0 6px 20px rgba(42, 47, 67, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 12px 24px rgba(42, 47, 67, 0.15), 0 10px 30px rgba(42, 47, 67, 0.15)",
                  },
                  textAlign: "center",
                  color: "#2a2f43",
                  backgroundColor: "#fdfdfd",
                }}
              >
                <Box sx={{ mb: 3 }}>{icon}</Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 12,
            maxWidth: 720,
            mx: "auto",
            textAlign: "center",
            color: "#2a2f43",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h3"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Why Partner With Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: isMobile ? "1rem" : "1.15rem",
              lineHeight: 1.7,
            }}
          >
            We combine technical expertise with creativity to deliver solutions
            that not only meet your business goals but exceed expectations. Our
            customer-focused approach ensures that every project is tailored to
            your unique needs.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: isMobile ? "1rem" : "1.15rem",
              lineHeight: 1.7,
            }}
          >
            Whether it’s building powerful apps, developing modern websites, or
            launching impactful digital marketing campaigns, we are committed to
            driving your digital transformation with passion and precision.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: isMobile ? "1rem" : "1.15rem", lineHeight: 1.7 }}
          >
            Join us to unlock the full potential of your digital presence.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
