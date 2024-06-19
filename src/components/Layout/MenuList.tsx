import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import { ReactSVG } from "react-svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLocation, useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import IconLogo from "../../assets/svgs/check.svg";

import "../../styles/components/Layout/MenuList.scss";

const MenuItemsList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseSession = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleContent = (route: string) => {
    navigate(`/${route}`);
  };

  return (
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
            <MenuItem
              onClick={() => handleContent("dashboard")}
              disabled={location.pathname === "/dashboard"}
            >
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleContent("profile")}
              disabled={location.pathname === "/profile"}
            >
              <ListItemIcon>
                <ManageAccountsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
          </MenuList>

          <Divider />

          <MenuList>
            <MenuItem
              onClick={() => handleContent("tasks")}
              disabled={location.pathname === "/tasks"}
            >
              <ListItemIcon>
                <AssignmentTurnedInIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Tasks</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleContent("projects")}
              disabled={location.pathname === "/projects"}
            >
              <ListItemIcon>
                <AutoAwesomeMosaicIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </MenuItem>
          </MenuList>

          <Divider />

          <MenuItem onClick={() => handleCloseSession()}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
          <div className="disclaimer-text">
            This is an on-building project, more features will be added in the
            future.
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default MenuItemsList;
