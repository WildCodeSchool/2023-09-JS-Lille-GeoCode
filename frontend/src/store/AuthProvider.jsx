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
  const [handleModal, setHandleModal] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);
  const [carAvailableList, setCarAvailableList] = useState(null);
  const [openBooking, setOpenBooking] = useState({
    page1: false,
    page2: false,
    page3: false,
  });
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

  const memoizedValue = useMemo(
    () => ({
      auth,
      setAuth,
      handleModal,
      setHandleModal,
      openBooking,
      setOpenBooking,
      selectedStation,
      setSelectedStation,
      carAvailableList,
      setCarAvailableList,
      selectedTime,
      setSelectedTime,
      selectedVehicle,
      setSelectedVehicle,
    }),
    [
      auth,
      handleModal,
      openBooking,
      setAuth,
      selectedStation,
      selectedTime,
      selectedVehicle,
    ]
  );

  return loading ? (
    <AuthContext.Provider value={memoizedValue}>
      {children}
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
