export type userType = {
  _id: any;
  firstName: string;
  lastName: string;
  email: string;
};

export type authContextType = {
  token: boolean;
  setToken: React.Dispatch<React.SetStateAction<boolean>>;
  user: userType;
  setUser: React.Dispatch<React.SetStateAction<userType>>;
};
