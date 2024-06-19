import { Chip } from "@mui/material";
import { IStatusSnack } from "../../interfaces/library.interface";

import "../../styles/components/Library/StatusSnack.scss";

const StatusSnack = ({ status }: IStatusSnack) => {
  const color = () => {
    if (status === "complete") {
      return "success";
    } else if (status === "in progress") {
      return "primary";
    } else if (status === "ready to start") {
      return "default";
    }
  };

  return (
    <div className="status-snack-container">
      <Chip label={status} size="small" color={color()} />
    </div>
  );
};

export default StatusSnack;
