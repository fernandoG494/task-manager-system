/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setRoute } from "./store/slices/route.slice";
import Router from "./routes/Router";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTimeout(() => {
        dispatch(setRoute("/"));
        navigate("/");
      }, 4000);
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
