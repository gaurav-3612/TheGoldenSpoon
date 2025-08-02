import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          At The Golden Spoon, we believe that dining is not just about food,
          but about the experience. Our journey began with a simple passion: to
          share the rich, diverse, and authentic flavors of India with our
          community. We travel through the culinary landscapes of the
          subcontinent, from the robust tandoors of the North to the aromatic
          spice coasts of the South, to bring you a menu that is both
          traditional and innovative.
        </p>
        <br />
        <p>
          Our name, "The Golden Spoon," represents our commitment to the highest
          standards of quality and hospitality. Every dish is crafted with love,
          using farm-fresh ingredients and time-honored family recipes passed
          down through generations. We aim to create a warm and inviting
          atmosphere where every meal is a celebration, and every guest feels
          like part of our family. Thank you for joining us. We look forward to
          serving you.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
