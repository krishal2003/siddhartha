import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import HeroSection from "./HeroSection";
import MainContent from "./MainContent";

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

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Open dialog automatically after mount
    setOpenDialog(true);
  }, []);

  return (
    <Box>
      <HeroSection />
      <MainContent />

      {/* Admission Open Pop-up Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ fontWeight: "bold", color: "#2a2f43" }}>
          🎓 Admission Open
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Applications are now open for the upcoming academic intake.
            <br />
            <br />
            Limited seats available for programs in Bachelor in Aviation
            Management.
            <br />
            Secure your spot today!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            variant="contained"
            sx={{ backgroundColor: "#2a2f43" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;
