import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import IconLogo from "../../assets/svgs/check.svg";
import { setRoute } from "../../store/slices/route.slice";

const MenuItemsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseSession = () => {
    localStorage.removeItem("token");
    dispatch(setRoute("/"));
    navigate("/");
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

            <MenuItem onClick={() => handleCloseSession()}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Log out</ListItemText>
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
};

export default MenuItemsList;
