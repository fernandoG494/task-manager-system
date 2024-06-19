import { Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TitleSelector = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setTitle("Dashboard");
      case "/profile":
        setTitle("Profile");
      case "/tasks":
        setTitle("Tasks");
      case "/projects":
        setTitle("Projects");
    }
  }, [location]);

  return (
    <Typography variant="h6" noWrap component="div">
      {title}
    </Typography>
  );
};

export default TitleSelector;
