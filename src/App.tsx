/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setRoute } from "./store/slices/route.slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTimeout(() => {
        dispatch(setRoute("/dashboard"));
        navigate("/dashboard");
      }, 4000);
    } else {
      dispatch(setRoute("/"));
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
