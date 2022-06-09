import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("login")) {
        setToken(true);
        setUser(JSON.parse(localStorage.getItem("user")));
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
