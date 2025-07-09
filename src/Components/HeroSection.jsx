// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "calc(60vh - 64px)", md: "calc(80vh - 64px)" },
        maxHeight: { xs: "80vh", md: "90vh" },
        mt: "80px", // margin top to clear navbar height
        pb: { xs: 6, md: 8 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundImage:
          "url('https://siddharthavanasthali.edu.np/wp-content/uploads/2024/06/airportlogistics.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.55)", // slightly darker overlay for contrast
          zIndex: 1,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "md",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <img src="logo.png" alt="College Logo" width="120" />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              lineHeight: 1.2,
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            KU Affiliated: Siddartha Vanasthali Institute
          </Typography>
        </Box>

        <Typography
          variant="h5"
          component="p"
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            color: "#ddd",
            maxWidth: 600,
            mx: "auto",
            mb: 5,
            px: { xs: 1, sm: 0 },
          }}
        >
          Take Flight With Your Dreams: Bachelor of Aviation Management
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              letterSpacing: 2,
              px: 4,
              borderRadius: 0,
              fontWeight: "bold",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                borderColor: "#bbb",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            startIcon={<PlayArrowIcon />}
          >
            Watch Campus Video Tour
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
