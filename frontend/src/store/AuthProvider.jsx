import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import userService from "../services/users";

const AuthContext = createContext();
const useStore = () => useContext(AuthContext);
const initialState = {
  user: { status: "visitor" },
};

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const setConnection = async () => {
    try {
      const result = await userService.getCurrentUser();

      setAuth({ user: result });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setConnection();
  }, []);
  const memoizedValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  return loading ? (
    <AuthContext.Provider value={memoizedValue}>
      <p>chargement...</p>
    </AuthContext.Provider>
  ) : (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };
export default useStore;
