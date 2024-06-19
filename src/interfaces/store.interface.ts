export interface ISessionStore {
  _id: string;
  name: string;
  lastName: string;
  roles: string[];
  token: string;
}

export interface IRouteStore {
  actualRoute: string;
}
