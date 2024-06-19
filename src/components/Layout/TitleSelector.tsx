import { Typography } from "@mui/material";

import { ITitleSelector } from "../../interfaces/layout.interface";
import { useEffect, useState } from "react";

const TitleSelector = ({ route }: ITitleSelector) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (route) {
      case "/dashboard":
        setTitle("Dashboard");
    }
  }, [route]);

  return (
    <Typography variant="h6" noWrap component="div">
      {title}
    </Typography>
  );
};

export default TitleSelector;
