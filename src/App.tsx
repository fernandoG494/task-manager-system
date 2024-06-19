/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";
import { validToken } from "./services/apiService";
import { setRoute } from "./store/slices/route.slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      validToken(token).then((isValid) => {
        if (isValid) {
          dispatch(setRoute("/dashboard"));
          navigate("/dashboard");
        } else {
          localStorage.removeItem("token");
          dispatch(setRoute("/login"));
          navigate("/login");
        }
      });
    } else {
      dispatch(setRoute("/login"));
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
