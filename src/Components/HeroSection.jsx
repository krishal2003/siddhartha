// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "60vh", md: "80vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2a2f43",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255, 255, 255, 0.85)",
          zIndex: 2,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          maxWidth: "md",
          px: 3,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: 1.2,
            mb: 2,
            color: "#2a2f43",
          }}
        >
          Powering Your Digital Future
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#2a2f43",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          IT solutions, digital marketing, app & web development tailored for
          your success.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
