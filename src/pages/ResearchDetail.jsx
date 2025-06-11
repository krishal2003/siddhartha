import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Divider,
} from "@mui/material";

const researchDetails = [
  {
    id: 1,
    title: "Aviation Safety Management",
    description:
      "Detailed information about aviation safety systems and practices, focusing on accident prevention and risk management strategies in aviation operations.",
    image: "https://source.unsplash.com/300x200/?aviation-safety,airplane",
    datePublished: "March 15, 2023",
    publishedBy: "International Aviation Authority",
    keyFindings: [
      "Enhanced safety protocols reduce aviation accidents by 15%.",
      "Implementing predictive analytics improves incident forecasting.",
      "Collaboration between airlines and safety agencies leads to better risk mitigation.",
    ],
    researchSummary:
      "Aviation Safety Management is critical for ensuring safe flight operations. This research delves into various systems and protocols that have proven to reduce the risk of accidents and enhance the overall safety culture within the aviation industry.",
    relatedResources: [
      "Aviation Safety Handbook - ICAO",
      "Global Safety Initiatives - IATA",
      "Flight Data Monitoring Systems - FAA",
    ],
  },
  {
    id: 2,
    title: "Air Traffic Control Systems",
    description:
      "In-depth look at the management of air traffic control systems, ensuring efficiency and safety in air traffic management.",
    image: "https://source.unsplash.com/300x200/?air-traffic-control,radar",
    datePublished: "May 10, 2022",
    publishedBy: "Aviation Research Group",
    keyFindings: [
      "Modernizing radar systems enhances air traffic management efficiency.",
      "Automated systems reduce human error in controlling air traffic.",
      "Integrating AI-based prediction models optimizes flight routing.",
    ],
    researchSummary:
      "This research investigates the role of modern technology in enhancing air traffic control systems. By implementing automation, AI, and predictive modeling, the aviation industry has made significant strides in improving the efficiency and safety of air traffic operations.",
    relatedResources: [
      "ICAO Air Traffic Management",
      "ATC Automation Strategies - Eurocontrol",
      "NextGen Air Traffic Control - FAA",
    ],
  },
  {
    id: 3,
    title: "Sustainability in Aviation",
    description:
      "Exploring the environmental impact of aviation and its sustainable practices, focusing on reducing carbon emissions in the aviation industry.",
    image: "https://source.unsplash.com/300x200/?aviation,eco-friendly,green",
    datePublished: "July 22, 2021",
    publishedBy: "Global Aviation Sustainability Network",
    keyFindings: [
      "Sustainable aviation fuel (SAF) reduces carbon emissions by 60%.",
      "Electric aircraft development has the potential to revolutionize short-haul flights.",
      "Industry-wide sustainability practices can cut overall aviation emissions by 40% by 2050.",
    ],
    researchSummary:
      "Sustainability in aviation is vital to reducing the carbon footprint of the industry. This study explores the various sustainable technologies and practices currently being implemented and how they can contribute to making aviation greener in the long term.",
    relatedResources: [
      "Sustainable Aviation Fuel Report - IATA",
      "Electric Aircraft Development - NASA",
      "Aviation Sustainability Plan - ICAO",
    ],
  },
];

export default function ResearchDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const research = researchDetails.find((area) => area.id === parseInt(id));

  if (!research) {
    return <Typography variant="h6">Research area not found.</Typography>;
  }

  return (
    <Container sx={{ py: 4, mt: 10 }}>
      {/* Research Title */}
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        {research.title}
      </Typography>

      {/* Research Card with Image */}
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={research.image}
          alt={research.title}
        />
        <CardContent>
          {/* Research Description */}
          <Typography variant="body1" color="text.secondary" paragraph>
            {research.description}
          </Typography>

          {/* Research Date and Published By */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" color="text.secondary">
              Published on: {research.datePublished}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Published by: {research.publishedBy}
            </Typography>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 2 }} />

          {/* Research Summary */}
          <Typography variant="h6" gutterBottom>
            Research Summary:
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {research.researchSummary}
          </Typography>

          {/* Key Findings */}
          <Typography variant="h6" gutterBottom>
            Key Findings:
          </Typography>
          <Box sx={{ mb: 2 }}>
            {research.keyFindings.map((finding, index) => (
              <Chip
                key={index}
                label={finding}
                sx={{
                  margin: "5px",
                  backgroundColor: "#e0e0e0",
                  color: "#333",
                  fontSize: "0.9rem",
                }}
              />
            ))}
          </Box>

          {/* Related Resources */}
          <Typography variant="h6" gutterBottom>
            Related Resources:
          </Typography>
          <Box>
            {research.relatedResources.map((resource, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                - {resource}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
