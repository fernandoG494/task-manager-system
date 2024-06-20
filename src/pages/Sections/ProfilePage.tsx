import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import { IUserProfile } from "../../interfaces/data.interface";
import LoadingScreen from "../../components/Layout/LoadingScreen";
import { retriveUsersInfo, validToken } from "../../services/apiService";
import NoProfilePicture from "../../assets/pngs/blank-profile-picture.png";

import "../../styles/pages/Sections/ProfilePage.scss";

const ProfilePage = () => {
  const [user, setUser] = useState({} as IUserProfile);
  const [dataFetched, setDataFetched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      validToken(token).then((isValid) => {
        if (isValid) {
          retriveUsersInfo(token).then((resp) => {
            setUser(resp?.data);
            setTimeout(() => setDataFetched(true), 1000);
          });
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  const profileImage = (): string => {
    if (user.profileImage != "") {
      return user.profileImage;
    }
    return NoProfilePicture;
  };

  console.log(user);

  const profilePosition = (): string => {
    if (user.position && user.company) {
      return `${user.position} at ${user.company}`;
    } else {
      return "Not position or company added yet";
    }
  };

  return (
    <div>
      {dataFetched ? (
        <Stack direction="row">
          <Stack direction="column" className="profile-container">
            <img
              src={profileImage()}
              alt="Profile image"
              className="profile-picture"
            />

            <div className="profile-name">
              {`${user.name} ${user.lastName}`}
            </div>
            <div className="profile-position-company">{profilePosition()}</div>
            <div className="profile-email">
              <EmailIcon
                style={{ verticalAlign: "middle", marginRight: "3px" }}
              />
              <span style={{ verticalAlign: "middle" }}>{`${user.email}`}</span>
            </div>
          </Stack>
          <div className="profile-settings">formulario</div>
        </Stack>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ProfilePage;
