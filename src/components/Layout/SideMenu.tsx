import {
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";

import { ReactSVG } from "react-svg";
import { ISideMenu } from "../../interfaces/layout.interfaces";

import IconLogo from "../../assets/svgs/check.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import "../../styles/components/SideMenu.scss";

const drawerWidth = 300;

const SideMenu = ({ setIsClosing, setMobileOpen, mobileOpen }: ISideMenu) => {
  const drawer = (
    <div className="sidemenu-bar-container">
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <ReactSVG
            src={IconLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 20px;");
              svg.querySelector("path")!.setAttribute("fill", "#22a316");
            }}
          />
          <div className="task-text">Task manager system</div>
        </Stack>
        <Stack direction="column">
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ManageAccountsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
          </MenuList>

          <Divider />

          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <AssignmentTurnedInIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Tasks</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AutoAwesomeMosaicIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </MenuItem>
          </MenuList>

          <Divider />

          <div className="disclaimer-text">
            This is an on-building projects, more features will be added on a
            future.
          </div>
        </Stack>
      </Stack>
    </div>
  );

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <div>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default SideMenu;
