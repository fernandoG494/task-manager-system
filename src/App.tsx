/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
