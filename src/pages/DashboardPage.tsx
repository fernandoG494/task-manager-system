/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { validToken } from "../services/apiService";
import SideMenu from "../components/Layout/SideMenu";
import { setRoute } from "../store/slices/route.slice";

import "../styles/pages/DashboardPage.scss";
import TitleSelector from "../components/Layout/TitleSelector";

const drawerWidth = 300;

const DashboardPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const route = useSelector((state: RootState) => state.route.actualRoute);

  const [isValid, setIsValid] = useState(true);

  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    validToken(token?.slice(1, -1))
      .then((res) => setIsValid(res))
      .catch((error) => error);

    if (!isValid) {
      dispatch(setRoute("/login"));
      navigate("/login");
    }
  }, []);

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
          <TitleSelector route={route} />
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
      </Box>
    </Box>
  );
};

export default DashboardPage;
