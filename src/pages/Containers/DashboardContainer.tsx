/* eslint-disable react-hooks/exhaustive-deps */
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Outlet, useNavigate } from "react-router-dom";

import { validToken } from "../../services/apiService";
import SideMenu from "../../components/Layout/SideMenu";
import TitleSelector from "../../components/Layout/TitleSelector";

import "../../styles/pages/Containers/DashboardContainer.scss";

const drawerWidth = 250;

const DashboardContainer = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [, setIsValid] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        const isValid = await validToken(token.slice(1, -1));
        setIsValid(isValid);
        if (!isValid) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } else {
        setIsValid(false);
        navigate("/login");
      }
    };

    verifyToken();

    const intervalId = setInterval(() => {
      verifyToken();
    }, 300000);

    return () => clearInterval(intervalId);
  }, [token]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <TitleSelector />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideMenu
          setIsClosing={setIsClosing}
          setMobileOpen={setMobileOpen}
          mobileOpen={mobileOpen}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardContainer;
