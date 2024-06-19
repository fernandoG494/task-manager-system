export interface IProject {
  colorTag: string;
  creationDate: Date;
  description: string;
  name: string;
  progress: number;
  tags: string[];
  updateDate: Date;
  favorite: boolean;
}

export interface ITask {
  name: string;
  description: string;
  status: "complete" | "in progress" | "ready to start";
}
