/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { validToken } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    validToken(token?.slice(1, -1))
      .then((res) => setIsValid(res))
      .catch((error) => error);

    if (!isValid) {
      navigate("/");
    }
  }, []);

  return <h1>Dashboard</h1>;
};

export default DashboardPage;
