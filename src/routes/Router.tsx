import { Route, Routes } from "react-router-dom";
import LoginRegisterPage from "../pages/LoginRegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/*" element={<LoginRegisterPage />} />
    </Routes>
  );
};

export default Router;
