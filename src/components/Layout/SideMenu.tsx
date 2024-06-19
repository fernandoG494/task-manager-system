import { Drawer } from "@mui/material";

import MenuItemsList from "./MenuList";
import { ISideMenu } from "../../interfaces/layout.interface";

import "../../styles/components/SideMenu.scss";

const drawerWidth = 250;

const SideMenu = ({ setIsClosing, setMobileOpen, mobileOpen }: ISideMenu) => {
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <div>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MenuItemsList />
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
        <MenuItemsList />
      </Drawer>
    </div>
  );
};

export default SideMenu;
