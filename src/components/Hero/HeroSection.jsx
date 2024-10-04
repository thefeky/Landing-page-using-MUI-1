import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import heroImage from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        background: "linear-gradient(to right, #003C50, #005976, #006080)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 5 }}>
        Find a developer for live mentorship & freelance projects
      </Typography>
      <Button
        variant="contained"
        sx={{ marginBottom: 20, backgroundColor: "#f5945c" }}
      >
        GET HELP NOW
      </Button>
      <img
        src={heroImage}
        alt="Placeholder"
        style={{
          width: "600px",
          height: "auto",
          position: "absolute",
          bottom: -110,
        }}
      />
    </Box>
  );
};

export default HeroSection;
