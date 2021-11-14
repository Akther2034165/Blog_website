import { AppBar, Button, makeStyles, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "#393535", color: "white" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Toolbar>
              <Typography variant="h6" component="div">
                HOME
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: "8%" }}>
                ABOUT
              </Typography>
              <Typography variant="h6" component="div">
                CONTACT
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: "8%" }}>
                LOGIN
              </Typography>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navigation;
