import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { authContextType, userType } from "./AuthContext.type";

const AuthContext = createContext<authContextType>({
  token: false,
  setToken: () => null,
  user: { _id: "", firstName: "", lastName: "", email: "" },
  setUser: () => null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<boolean>(false);
  const [user, setUser] = useState<userType>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("login")) {
        setToken(true);
        setUser(JSON.parse(localStorage.getItem("user") || "{}"));
      } else {
        navigate("/");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
