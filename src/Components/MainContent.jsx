// src/components/MainContent.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const infoCards = [
  { icon: <ArrowForwardIosIcon fontSize="large" />, title: "WHY BAM?" },
  { icon: <ApartmentIcon fontSize="large" />, title: "EXPLORE CAMPUS" },
  {
    icon: <FlightTakeoffIcon fontSize="large" />,
    title: "UPCOMING ADMISSION DATES",
  },
  {
    icon: <AirplanemodeActiveIcon fontSize="large" />,
    title: "CAREER IN AVIATION",
  },
];

const aboutText1 = `The Bachelor of Aviation Management (BAM) program offers an exceptional blend of theory and practical knowledge designed to prepare students for a dynamic aviation industry. Our curriculum covers airport management, aviation safety, air traffic control, and airline operations.`;
const aboutText2 = `Students gain hands-on experience through our state-of-the-art simulation labs, industry internships, and seminars with aviation experts. Our graduates are equipped to take leadership roles in the global aviation sector, with strong emphasis on ethics, safety, and innovation.`;

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Alumnus, Batch 2020",
    text: "The BAM program gave me the skills and confidence to launch my career in airport management. The faculty's real-world insights and practical sessions were invaluable.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mina Koirala",
    role: "Current Student",
    text: "I love the hands-on training and the opportunities to interact with industry professionals. The campus environment and support are fantastic!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Thapa",
    role: "Industry Partner",
    text: "We've partnered with Siddartha Vansthali Institute to hire BAM graduates who consistently demonstrate professionalism and expertise. The program aligns well with industry needs.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const newsItems = [
  {
    title: "MoU Signed with Nepal Airlines",
    date: "May 10, 2025",
    description:
      "Siddartha Vansthali Institute proudly announces a new Memorandum of Understanding with Nepal Airlines to enhance student internship opportunities and collaborative research.",
  },
  {
    title: "Industrial Visit to Tribhuvan International Airport",
    date: "April 20, 2025",
    description:
      "Students of the BAM program visited Tribhuvan International Airport to gain first-hand knowledge of airport operations and management.",
  },
  {
    title: "Aviation Safety Seminar Scheduled",
    date: "June 5, 2025",
    description:
      "An interactive seminar focused on the latest aviation safety protocols featuring experts from the Civil Aviation Authority of Nepal.",
  },
  {
    title: "Open House for Prospective Students",
    date: "July 1, 2025",
    description:
      "Join us for an open house event to explore the BAM program, meet faculty members, and tour our campus facilities.",
  },
  {
    title: "Guest Lecture on Future of Aviation Technology",
    date: "August 15, 2025",
    description:
      "Industry leaders will discuss emerging aviation technologies and career opportunities in a special guest lecture.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
};

const MainContent = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Info Cards Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            bgcolor: "#fff",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {infoCards.map((card, idx) => (
            <Box
              key={idx}
              sx={{
                flex: 1,
                borderRight:
                  idx !== infoCards.length - 1 ? "1px solid #ddd" : "none",
                py: { xs: 3, md: 6 },
                textAlign: "center",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "#e9f0ff",
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  border: "1.5px solid #2a2f43",
                  borderRadius: 2,
                  margin: "0 auto 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2a2f43",
                }}
              >
                {card.icon}
              </Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: "#2a2f43" }}
              >
                {card.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* About the Program Section */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            bgcolor: "#fff",
            borderRadius: 2,
            p: { xs: 3, md: 6 },
            boxShadow: 1,
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 3, color: "#2a2f43" }}
              >
                ABOUT THE PROGRAM
              </Typography>
              <Typography
                sx={{
                  color: "#4a4a4a",
                  mb: 2,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                }}
              >
                {aboutText1}
              </Typography>
              <Typography
                sx={{
                  color: "#4a4a4a",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.7,
                }}
              >
                {aboutText2}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  px: 5,
                  py: 1.5,
                  color: "#2a2f43",
                  borderColor: "#2a2f43",
                  fontSize: "0.9rem",
                  "&:hover": {
                    borderColor: "#2a2f43",
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                LEARN MORE
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Testimonial Slider Section */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            bgcolor: "#eef5ff",
            p: { xs: 4, md: 8 },
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Slider {...sliderSettings}>
            {testimonials.map((testi, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 3, md: 6 },
                }}
              >
                <Box
                  component="img"
                  src={testi.img}
                  alt={testi.name}
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: 3,
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      color: "#334155",
                      mb: 3,
                    }}
                  >
                    “{testi.text}”
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "#1e293b",
                    }}
                  >
                    {testi.name}
                  </Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "0.875rem" }}>
                    {testi.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* News and Events Section */}
        <Box sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 6, md: 12 } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 4, color: "#2a2f43" }}
          >
            NEWS AND EVENTS
          </Typography>
          {newsItems.map((item, idx) => (
            <Paper
              key={idx}
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                bgcolor: "#f9fafb",
                "&:hover": { boxShadow: 4 },
                cursor: "pointer",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#1e293b" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#64748b", mb: 1, display: "block" }}
              >
                {item.date}
              </Typography>
              <Typography variant="body2" sx={{ color: "#475569" }}>
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MainContent;
