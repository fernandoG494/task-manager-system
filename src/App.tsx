/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";
import { validToken } from "./services/apiService";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      validToken(token).then((isValid) => {
        if (isValid) {
          navigate("/dashboard");
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
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
