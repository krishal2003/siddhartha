// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const NavButton = styled(Button)({
  fontWeight: "bold",
  color: "#2A2F43",
  textTransform: "none",
  fontSize: "16px",
  marginLeft: "20px",
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: "#2A2F43",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const GetInTouchButton = styled(Button)({
  borderRadius: "20px",
  borderColor: "#2A2F43",
  color: "#2A2F43",
  textTransform: "none",
  fontWeight: "bold",
  width: "120%",
  padding: "10px 0",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#2A2F43",
    color: "#fff",
    borderColor: "#2A2F43",
  },
});

const MenuItemStyled = styled(MenuItem)({
  color: "#2A2F43",
  fontWeight: "bold",
  fontSize: "16px",
  paddingTop: 12,
  paddingBottom: 12,
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Nav links with their hrefs
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/service" },
    { title: "About Us", href: "/about" },
    { title: "Career", href: "/career" },
  ];

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{ background: "transparent", boxShadow: "none", paddingTop: 2 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo with href */}
          <Box display="flex" alignItems="center">
            <a href="/">
              <img
                src="/logo.png"
                alt="Uddheshya Logo"
                style={{ height: 35, marginRight: 10 }}
              />
            </a>
          </Box>

          {/* Desktop nav links and button */}
          {!isMobile && (
            <>
              <Box display="flex" alignItems="center">
                {navLinks.map(({ title, href }) => (
                  <NavButton
                    key={title}
                    component="a"
                    href={href}
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </NavButton>
                ))}
              </Box>
              <Box>
                <GetInTouchButton
                  variant="outlined"
                  component="a"
                  href="/contact"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Get in Touch
                </GetInTouchButton>
              </Box>
            </>
          )}

          {/* Mobile menu icon and dropdown */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: "#2A2F43" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  sx: {
                    width: 250,
                    padding: 2,
                    borderRadius: 2,
                  },
                }}
              >
                {navLinks.map(({ title, href }) => (
                  <MenuItemStyled
                    key={title}
                    onClick={handleMenuClose}
                    component="a"
                    href={href}
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </MenuItemStyled>
                ))}

                <Divider sx={{ marginY: 1 }} />

                <GetInTouchButton
                  variant="outlined"
                  component="a"
                  href="/contact"
                  target="_self"
                  rel="noopener noreferrer"
                  sx={{ width: "100%", p: 2 }}
                  onClick={handleMenuClose}
                >
                  Get in Touch
                </GetInTouchButton>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
