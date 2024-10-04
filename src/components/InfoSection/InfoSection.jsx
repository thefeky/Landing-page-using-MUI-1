/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material";

const InfoSection = ({ image, title, items, reverse, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginRight: reverse ? 2 : 0,
          marginLeft: reverse ? 0 : 25,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              {item.icon}
              <Typography variant="body1">{item.text}</Typography>
            </li>
          ))}
        </ul>
        {/* Conditionally render the button only if children is provided */}
        {children && (
          <Button
            variant="contained"
            sx={{
              marginLeft: 5,
              backgroundColor: "#f5945c",
              boxShadow: "none",
            }}
          >
            {children}
          </Button>
        )}
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" ,marginRight: reverse ? 0 : 35
           }}>
        <img src={image} alt={title} style={{ width: "500px", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default InfoSection;
