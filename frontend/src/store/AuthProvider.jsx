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
  isLogged: false,
};

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialState);
  const [handleModal, sethandleModal] = useState(true);
  const [openBooking, SetopenBooking] = useState({
    page1: false,
    page2: false,
    page3: false,
  });
  const setConnection = async () => {
    try {
      const result = await userService.getCurrentUser();
      setAuth({ user: result, isLogged: true });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setConnection();
  }, []);

  const memoizedValue = useMemo(
    () => ({
      auth,
      setAuth,
      handleModal,
      sethandleModal,
      openBooking,
      SetopenBooking,
    }),
    [auth, handleModal, openBooking, setAuth]
  );

  return (
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
