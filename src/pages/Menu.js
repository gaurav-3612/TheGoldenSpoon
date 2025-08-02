import React, { useState, useMemo } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
  Modal,
} from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card will animate 0.1s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Style for the modal pop-up
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400, md: 500 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleOpen = (menuItem) => {
    setSelectedMenu(menuItem);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMenu(null);
  };

  const filteredAndSortedMenu = useMemo(() => {
    let menu = [...MenuList];
    if (filter !== "All") {
      menu = menu.filter((item) => item.category === filter);
    }
    if (sort === "lowToHigh") {
      menu.sort((a, b) => a.price - b.price);
    } else if (sort === "highToLow") {
      menu.sort((a, b) => b.price - a.price);
    }
    return menu;
  }, [filter, sort]);

  return (
    <Layout>
      <Box sx={{ my: 5, textAlign: "center" }}>
        {/* Filtering and Sorting Controls... */}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Filter by Category
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 1, mb: 4, flexWrap: "wrap" }}>
          {["All", ...new Set(MenuList.map((item) => item.category))].map(
            (category) => (
              <Button
                key={category}
                variant={filter === category ? "contained" : "outlined"}
                onClick={() => setFilter(category)}
                sx={{ color: "black", borderColor: "black" }}>
                {category}
              </Button>
            )
          )}
        </Stack>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Sort by Price
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 1, mb: 4, flexWrap: "wrap" }}>
          <Button
            variant={sort === "default" ? "contained" : "outlined"}
            onClick={() => setSort("default")}
            sx={{ color: "black", borderColor: "black" }}>
            Default
          </Button>
          <Button
            variant={sort === "lowToHigh" ? "contained" : "outlined"}
            onClick={() => setSort("lowToHigh")}
            sx={{ color: "black", borderColor: "black" }}>
            Low to High
          </Button>
          <Button
            variant={sort === "highToLow" ? "contained" : "outlined"}
            onClick={() => setSort("highToLow")}
            sx={{ color: "black", borderColor: "black" }}>
            High to Low
          </Button>
        </Stack>
      </Box>

      {/* The main container for the animated cards */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredAndSortedMenu.map((menu) => (
          // Each card is wrapped in its own motion component for individual animation
          <motion.div variants={itemVariants} key={menu.name}>
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea onClick={() => handleOpen(menu)}>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                  <Typography variant="h6" component="p" sx={{ mt: 1 }}>
                    ${menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="menu-item-modal-title">
        <Box sx={modalStyle}>
          {selectedMenu && (
            <>
              <CardMedia
                sx={{ height: 250, mb: 2 }}
                component={"img"}
                src={selectedMenu.image}
                alt={selectedMenu.name}
              />
              <Typography
                id="menu-item-modal-title"
                variant="h4"
                component="h2">
                {selectedMenu.name}
              </Typography>
              <Typography sx={{ mt: 2 }}>{selectedMenu.description}</Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                ${selectedMenu.price}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Layout>
  );
};

export default Menu;
