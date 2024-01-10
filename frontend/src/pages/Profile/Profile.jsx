import VisitorProfile from "./VisitorProfile";
import ConnectedProfile from "./ConnectedProfile";

function Profile() {
  const isConnected = false;
  return isConnected ? <ConnectedProfile /> : <VisitorProfile />;
}

export default Profile;
