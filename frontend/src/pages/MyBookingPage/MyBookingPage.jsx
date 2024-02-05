import "./MyBookingPage.scss";
import BackgroundAsideType from "../../components/BackgroundAsideType/BackgroundAsideType";
import MyBooking from "../../components/MyBooking/MyBooking";

function personalBooking() {
  return (
    <BackgroundAsideType title="Mes réservations">
      <MyBooking />
    </BackgroundAsideType>
  );
}

export default personalBooking;
