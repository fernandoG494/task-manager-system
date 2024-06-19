import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

import { projectsMock } from "../../data/projects.data";
import { IProject } from "../../interfaces/data.interface";
import ProjectCard from "../../components/Dashboard/ProjectCard";

import "../../styles/pages/Sections/Dashboard.scss";

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
          <Stack direction="column">{}</Stack>
        </div>
        <div className="recent-projects"></div>
        <div></div>
      </Stack>
    </div>
  );
};

export default DashboardPage;
