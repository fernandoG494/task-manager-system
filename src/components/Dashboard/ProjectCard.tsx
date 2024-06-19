import { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IProject } from "../../interfaces/data.interface";

import "../../styles/components/Dashboard/ProjectCard.scss";

const ProjectCard = ({
  colorTag,
  creationDate,
  description,
  name,
  progress,
  tags,
  updateDate,
  favorite,
}: IProject) => {
  const [favoriteProject, setFavorite] = useState(favorite);

  const turnFavorite = () => {
    setFavorite(!setFavorite);
    // TODO: API config
  };

  // console.log(creationDate, updateDate);
  // console.log(colorTag, tags);
  return (
    <div
      className="project-card-container"
      style={{ border: `1px solid ${colorTag}` }}
    >
      <div className="name-text">
        <Stack
          direction="row"
          justifyContent="space-between"
          className="title-stack"
        >
          {name}
          <IconButton
            aria-label="favorite"
            color="error"
            onClick={() => turnFavorite()}
          >
            {favoriteProject ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Stack>
      </div>
      <div>{progress}</div>
      <div className="description-text">{description}</div>
    </div>
  );
};

export default ProjectCard;
