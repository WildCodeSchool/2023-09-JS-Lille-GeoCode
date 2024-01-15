import BackButton from "../../components/BackButton/BackButton";
import "./UserInformations.scss";
import AddressIcon from "../../assets/address-21a89a.png";
import GenderIcon from "../../assets/gender-mark-2-21a89a.png";
import EmailIcon from "../../assets/email-21a89a.png";
import BirthdayIcon from "../../assets/birthday-cake-21a89a.png";
import userPicturePath from "../../assets/louiseampere.jpg";
import arrowDark from "../../assets/arrowBackDark.svg";
import NavigationButton from "../Home/NavigationButton";

const users = {
  id: 1,
  firstname: "Louise",
  lastname: "Ampère",
  birthdate: "12 janvier 1980",
  gender: "Femme",
  email: "louise.ampere@tesla.com",
  zipcode: "59000",
  city: "Lille",
};

function UserInformations() {
  return (
    <section className="viewport_userinformations">
      <img className="userpicture" alt="" src={userPicturePath} />
      <p className="username firstname">{users.firstname}</p>
      <p className="username lastname">{users.lastname}</p>
      <img className="icon birthdate_icon" alt="" src={BirthdayIcon} />
      <p className="userinfo birthdate">{users.birthdate}</p>
      <img className="icon gender_icon" alt="" src={GenderIcon} />
      <p className="userinfo gender">{users.gender}</p>
      <img className="icon email_icon" alt="" src={EmailIcon} />
      <p className="userinfo email">{users.email}</p>
      <img className="icon address_icon" alt="" src={AddressIcon} />
      <p className="userinfo zipcode">{users.zipcode}</p>
      <p className="userinfo city">{users.city}</p>
      <NavigationButton
        text="Modifier"
        buttonStylization="style-button"
        destination="/editprofile"
      />
      <BackButton
        colorArrow={arrowDark}
        backButtonStyle="backButton backButtonUserInfo"
      />
    </section>
  );
}

export default UserInformations;
