export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IRegisterFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ISideMenu {
  setIsClosing: (arg0: boolean) => void;
  setMobileOpen: (arg0: boolean) => void;
  mobileOpen: boolean | undefined;
}
