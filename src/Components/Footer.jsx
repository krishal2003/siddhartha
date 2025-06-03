// src/components/Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2a2f43",
        color: "#fff",
        pt: 8,
        pb: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Quick Links */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", flexDirection: "column", pb: 2 }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              About Us
            </Link>
            <Link
              href="/services"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Services
            </Link>
            <Link
              href="/career"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Careers
            </Link>
          </Grid>

          {/* Our Team */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", flexDirection: "column", pb: 2 }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Our Team
            </Typography>
            <Link
              href="/team/leadership"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Leadership
            </Link>
            <Link
              href="/team/developers"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Developers
            </Link>
            <Link
              href="/team/marketing"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Marketing
            </Link>
            <Link
              href="/team/support"
              color="inherit"
              underline="hover"
              mb={1.5}
              display="block"
            >
              Support
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", flexDirection: "column", pb: 2 }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Contact Info
            </Typography>
            <Typography mb={1.5}>
              Email:{" "}
              <Link
                href="mailto:uddheshya@gmail.com"
                color="inherit"
                underline="hover"
              >
                uddheshya@gmail.com
              </Link>
            </Typography>
            <Typography mb={1.5}>
              Phone:{" "}
              <Link href="tel:+9779811111111" color="inherit" underline="hover">
                +977 9811111111
              </Link>
            </Typography>
            <Typography>Location: Pulchowk, Kathmandu</Typography>
          </Grid>

          {/* Connect */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", flexDirection: "column", pb: 2 }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              Connect With Us
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff", mr: 1.5 }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff", mr: 1.5 }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff" }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 5 }} />

        <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Uddheshya. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
