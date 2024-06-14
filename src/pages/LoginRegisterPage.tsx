import { useState } from "react";
import { ReactSVG } from "react-svg";
import { Stack, Tab } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";

import LoginComponent from "../components/Layout/LoginComponent";
import RegisterComponent from "../components/Layout/RegisterComponent";

import "../styles/pages/LoginRegisterPage.scss";

import IconLogo from "../assets/svgs/check.svg";
import PanelImage from "../assets/pngs/span-image.jpg";

const LoginRegisterPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Stack direction="row" className="LoginRegister-container">
      <div className="left-form">
        <div className="navigator">
          <Stack direction="column">
            <div className="icon-logo">
              <Stack direction="row" justifyContent="center">
                <ReactSVG
                  src={IconLogo}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", "width: 30px;");
                    svg.querySelector("path")!.setAttribute("fill", "#22a316");
                  }}
                />
                <div className="task-text">Task manager system</div>
              </Stack>
            </div>
            <div className="navigator-container">
              <TabContext value={value}>
                <TabList centered onChange={handleChange} textColor="inherit">
                  <Tab label="Login" value="1" />
                  <Tab label="Register" value="2" />
                </TabList>
                <TabPanel value="1" className="tabpanel-item">
                  <LoginComponent />
                </TabPanel>
                <TabPanel value="2" className="tabpanel-item">
                  <RegisterComponent />
                </TabPanel>
              </TabContext>
            </div>
          </Stack>
        </div>
      </div>
      <div className="right-panel">
        <Stack direction="column" justifyContent="center">
          <img
            src={PanelImage}
            alt="Image from panel"
            className="image-wrapper"
          />
          <div className="panel-header">
            Organize, collaborate, and be agile.
          </div>
          <div className="panel-body">
            Everything you need to manage your personal projects.
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default LoginRegisterPage;
