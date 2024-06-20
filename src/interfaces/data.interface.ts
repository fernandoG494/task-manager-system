export interface IProject {
  colorTag: string;
  creationDate: Date;
  description: string;
  favorite: boolean;
  name: string;
  progress: number;
  tags: string[];
  updateDate: Date;
}

export interface ITask {
  description: string;
  name: string;
  status: "complete" | "in progress" | "ready to start";
}

export interface IUserProfile {
  __v: number;
  _id: string;
  company: string;
  email: string;
  isActive: boolean;
  lastName: string;
  name: string;
  position: string;
  profileImage: string;
  roles: string[];
}
