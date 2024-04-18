import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Home Loan Wiz</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
