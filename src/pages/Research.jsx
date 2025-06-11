import React from "react";
import { Link } from "react-router-dom"; // Link for routing
import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const researchAreas = [
  {
    id: 1,
    title: "Aviation Safety Management",
    description:
      "Detailed information about aviation safety systems and practices, focusing on accident prevention and risk management strategies in aviation operations.",
    image: "https://source.unsplash.com/300x200/?aviation-safety,airplane",
  },
  {
    id: 2,
    title: "Air Traffic Control Systems",
    description:
      "Research into the management and optimization of air traffic control systems, ensuring efficiency and safety in air traffic management.",
    image: "https://source.unsplash.com/300x200/?air-traffic-control,radar",
  },
  {
    id: 3,
    title: "Sustainability in Aviation",
    description:
      "Exploring the environmental impact of aviation and its sustainable practices, focusing on reducing carbon emissions in the aviation industry.",
    image: "https://source.unsplash.com/300x200/?aviation,eco-friendly,green",
  },
  {
    id: 4,
    title: "Drone Integration in Airspace",
    description:
      "Exploring the future of drones and their integration into national and international airspace management systems for commercial use.",
    image: "https://source.unsplash.com/300x200/?drone,aviation",
  },
  {
    id: 5,
    title: "Aviation Security and Risk Management",
    description:
      "In-depth research on the various layers of security in aviation and strategies for preventing threats in the aviation industry.",
    image: "https://source.unsplash.com/300x200/?aviation-security,airport",
  },
  {
    id: 6,
    title: "Aircraft Maintenance Engineering",
    description:
      "Study of techniques and technologies used in the maintenance, repair, and overhaul of aircraft, ensuring their safety and efficiency.",
    image: "https://source.unsplash.com/300x200/?aircraft-maintenance,repair",
  },
];

export default function Research() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, mt: 7 }}
      >
        Research Areas in Aviation Management
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {researchAreas.map((area) => (
          <Box
            key={area.id}
            sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
          >
            <Card sx={{ cursor: "pointer" }}>
              <Link
                to={`/research/${area.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={area.image}
                  alt={area.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {area.description}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
