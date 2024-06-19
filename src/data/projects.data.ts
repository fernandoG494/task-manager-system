import { IProject } from "../interfaces/data.interface";

export const projectsMock: IProject[] = [
  {
    colorTag: "#FF5733",
    creationDate: new Date("December 17, 2022"),
    description: "project description 1",
    favorite: true,
    name: "Project 1",
    progress: 50,
    tags: ["web design"],
    updateDate: new Date("February 28, 2024"),
  },
  {
    colorTag: "#1571FF",
    creationDate: new Date("December 17, 2022"),
    description: "project description 2",
    favorite: false,
    name: "Project 2",
    progress: 0,
    tags: ["development"],
    updateDate: new Date("February 28, 2024"),
  },
  {
    colorTag: "#15FF3C",
    creationDate: new Date("December 17, 2022"),
    description: "project description 3",
    favorite: true,
    name: "Project 3",
    progress: 100,
    tags: ["planning"],
    updateDate: new Date("February 28, 2024"),
  },
];
