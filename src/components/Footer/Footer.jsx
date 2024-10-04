import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 3,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Connect with me @Shehab Gamal
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          color="inherit"
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com"
          target="_blank"
          color="inherit"
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          color="inherit"
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </IconButton>
      </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Shady. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
