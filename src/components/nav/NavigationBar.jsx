import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();

  const handleAsteriaClick = () => {
    history.push("/");
  };
  const handleDatasetsClick = () => {
    history.push("/datasets");
  };
  const handleModelsClick = () => {
    history.push("/models");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleAsteriaClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Asteria
            </Button>
            <Button
              onClick={handleDatasetsClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Datasets
            </Button>
            <Button
              onClick={handleModelsClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Models
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
