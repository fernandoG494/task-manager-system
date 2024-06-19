import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

import { projectsMock } from "../../data/projects.data";
import { IProject, ITask } from "../../interfaces/data.interface";
import ProjectCard from "../../components/Dashboard/ProjectCard";

import "../../styles/pages/Sections/Dashboard.scss";
import { tasks } from "../../data/tasks.data";
import TaskItem from "../../components/Dashboard/TaskItem";

const DashboardPage = () => {
  const userName = useSelector((state: RootState) => state.session.name);

  return (
    <div className="dashboard-container">
      <Stack direction="column" className="content-container">
        <div className="head-banner">
          <div className="head-banner-title">{`Welcome, ${userName}`}</div>
          <div className="head-banner-subtitle">{`Check out latest updates`}</div>
        </div>
        <div className="projects-status">
          <Stack direction="row" spacing={2}>
            {projectsMock.map(
              ({
                colorTag,
                creationDate,
                description,
                favorite,
                name,
                progress,
                tags,
                updateDate,
              }: IProject) => {
                return (
                  <ProjectCard
                    colorTag={colorTag}
                    creationDate={creationDate}
                    description={description}
                    favorite={favorite}
                    name={name}
                    progress={progress}
                    tags={tags}
                    updateDate={updateDate}
                  />
                );
              }
            )}
          </Stack>
        </div>
        <div className="recent-tasks">
          <div className="recent-tasks-title">{`Your recent tasks...`}</div>
          <Stack direction="column">
            {tasks.map(({ description, name, status }: ITask) => {
              return (
                <TaskItem
                  description={description}
                  name={name}
                  status={status}
                />
              );
            })}
          </Stack>
        </div>
        <div className="recent-projects"></div>
        <div></div>
      </Stack>
    </div>
  );
};

export default DashboardPage;
