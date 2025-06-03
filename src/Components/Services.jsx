// src/components/Service.jsx
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
import VideocamIcon from "@mui/icons-material/Videocam";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PodcastIcon from "@mui/icons-material/GraphicEq"; // podcast icon
import LocalPlayIcon from "@mui/icons-material/LocalPlay"; // for channel distribution
import HotelIcon from "@mui/icons-material/Hotel"; // hospitality
import CampaignIcon from "@mui/icons-material/Campaign"; // promotion
import PaidIcon from "@mui/icons-material/Payment"; // paid advertising
import BrushIcon from "@mui/icons-material/Brush"; // branding
import SearchIcon from "@mui/icons-material/Search"; // SEO
import BarChartIcon from "@mui/icons-material/BarChart"; // analytics
import SchoolIcon from "@mui/icons-material/School"; // education
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // music promotion

const services = [
  {
    title: "Graphic & UI Design",
    description:
      "Creative design services including branding, UI/UX design, and graphics that communicate your story effectively.",
    icon: <DesignServicesIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Social Media Management",
    description:
      "Comprehensive management of your social channels to engage your audience and build your brand presence.",
    icon: <PeopleIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Content Creation",
    description:
      "High-quality written, visual, and multimedia content crafted to captivate and inform your target audience.",
    icon: <BrushIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Influencer and Community Marketing",
    description:
      "Leverage influencers and foster strong communities to amplify your message authentically.",
    icon: <CampaignIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "App Development",
    description:
      "Custom mobile applications crafted for superior user experience and seamless functionality across platforms.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Web Development",
    description:
      "Modern and responsive websites tailored to showcase your brand and convert visitors into loyal customers.",
    icon: <LanguageIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Event Promotion and Coordination",
    description:
      "Strategic planning and promotion of events to maximize attendance and engagement.",
    icon: <EventAvailableIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Podcast and YouTube Channel Distribution",
    description:
      "Manage and distribute audio and video content effectively across platforms to grow your audience.",
    icon: <PodcastIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Hospitality and Entertainment Marketing",
    description:
      "Specialized marketing for hospitality and entertainment sectors to attract and delight customers.",
    icon: <HotelIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Paid Advertising and Media Buying",
    description:
      "Optimize your advertising spend with strategic media buying and campaign management.",
    icon: <PaidIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Branding and Identity Development",
    description:
      "Create memorable brand identities that resonate and build trust with your audience.",
    icon: <BrushIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },

  {
    title: "Research and Analytics for Marketing Strategy",
    description:
      "In-depth market research and analytics to craft precise and effective marketing strategies.",
    icon: <BarChartIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Educational Campaigns and Conference Management",
    description:
      "Plan and manage impactful educational campaigns and conferences to engage your target groups.",
    icon: <SchoolIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Music and Cultural Brand Promotion",
    description:
      "Promote music and cultural brands through innovative marketing and event partnerships.",
    icon: <MusicNoteIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing services to create engaging and compelling visual content that boosts your brand visibility.",
    icon: <VideocamIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, social media management, content creation, and paid campaigns to grow your audience.",
    icon: <TrendingUpIcon sx={{ fontSize: 60, color: "#2a2f43" }} />,
  },
];

const Service = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
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
          Our Services
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {services.map(({ title, description, icon }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={title}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 5,
                  maxWidth: 360,
                  borderRadius: 4,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  boxShadow:
                    "0 10px 25px rgba(42, 47, 67, 0.12), 0 8px 30px rgba(42, 47, 67, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow:
                      "0 15px 40px rgba(42, 47, 67, 0.2), 0 12px 50px rgba(42, 47, 67, 0.15)",
                  },
                  cursor: "default",
                }}
              >
                <Box sx={{ mb: 3 }}>{icon}</Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#2a2f43",
                    letterSpacing: 0.5,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.6, fontSize: "1rem" }}
                >
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
