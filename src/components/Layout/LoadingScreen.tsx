import { CircularProgress } from "@mui/material";
import "../../styles/components/Layout/LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-content-container">
      <CircularProgress />
      <h2>Loading</h2>
      <div>Fetching user data...</div>
      <div>Please wait...</div>
    </div>
  );
};

export default LoadingScreen;
