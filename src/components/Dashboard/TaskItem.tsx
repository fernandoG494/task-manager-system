import { Stack } from "@mui/material";

import { ITask } from "../../interfaces/data.interface";

import "../../styles/components/Dashboard/TaskItem.scss";

const TaskItem = ({ description, name, status }: ITask) => {
  const statusColor = (status: string) => {
    if (status === "complete") {
      return "green";
    } else if (status === "ready to start") {
      return "grey";
    } else if (status === "in progress") {
      return "blue";
    }
  };

  return (
    <Stack direction="row" className="task-container">
      <div className="task-title">{name}</div>
      <div className="task-description">{description}</div>
      <div className="task-status" style={{ color: `${statusColor(status)}` }}>
        {status}
      </div>
    </Stack>
  );
};

export default TaskItem;
