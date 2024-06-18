import { Route, Routes } from "react-router-dom";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import DashboardPage from "../pages/DashboardPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/login" element={<LoginRegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/*" element={<LoginRegisterPage />} />
    </Routes>
  );
};

export default Router;
