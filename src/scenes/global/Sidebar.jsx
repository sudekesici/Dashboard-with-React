import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { Link } from "react-router-dom"; // React Router'dan Link bileşeni

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ position: "absolute", top: 16, left: -5 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#1a1a2e",
            height: "100%",
            color: "white",
            padding: "10px",
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}
            >
              Dashboard
            </Typography>

            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menü Öğeleri */}
          <div>
            {/* Dashboard Link */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                padding: "10px 0",
              }}
              onClick={toggleDrawer(false)}
            >
              <HomeOutlinedIcon sx={{ marginRight: 1 }} />
              Dashboard
            </Link>

            {/* Manage Team Link */}
            <Link
              to="/manage-team"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                padding: "10px 0",
              }}
              onClick={toggleDrawer(false)}
            >
              <PeopleOutlinedIcon sx={{ marginRight: 1 }} />
              Manage Team
            </Link>

            {/* Contacts Link */}
            <Link
              to="/contacts"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                padding: "10px 0",
              }}
              onClick={toggleDrawer(false)}
            >
              <ContactsOutlinedIcon sx={{ marginRight: 1 }} />
              Contacts
            </Link>

            {/* Invoices Link */}
            <Link
              to="/invoices"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                padding: "10px 0",
              }}
              onClick={toggleDrawer(false)}
            >
              <ReceiptOutlinedIcon sx={{ marginRight: 1 }} />
              Invoices
            </Link>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
