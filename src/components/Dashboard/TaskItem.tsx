import { Stack } from "@mui/material";

import StatusSnack from "../Library/StatusSnack";
import { ITask } from "../../interfaces/data.interface";

import "../../styles/components/Dashboard/TaskItem.scss";

const TaskItem = ({ description, name, status }: ITask) => {
  return (
    <Stack direction="row" className="task-container">
      <div className="task-title">{name}</div>
      <div className="task-description">{description}</div>
      <div className="task-status">
        <StatusSnack status={status} />
      </div>
    </Stack>
  );
};

export default TaskItem;
