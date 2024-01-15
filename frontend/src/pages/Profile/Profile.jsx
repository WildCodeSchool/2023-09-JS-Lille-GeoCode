import VisitorProfile from "./VisitorProfile";
import ConnectedProfile from "./ConnectedProfile";

function Profile() {
  const isConnected = true;
  return isConnected ? <ConnectedProfile /> : <VisitorProfile />;
}

export default Profile;
