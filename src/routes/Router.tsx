import { Route, Routes } from "react-router-dom";
import DashboardContainer from "../pages/Containers/DashboardContainer";
import LoginRegisterContainer from "../pages/Containers/LoginRegisterContainer";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/Sections/ProfilePage";
import TaskPage from "../pages/Sections/TasksPage";
import ProjectsPage from "../pages/Sections/ProjectsPage";
import DashboardPage from "../pages/Sections/DashboardPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRegisterContainer />} />
      <Route path="/" element={<DashboardContainer />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
