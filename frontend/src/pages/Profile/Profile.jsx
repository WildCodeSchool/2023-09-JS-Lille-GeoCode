import VisitorProfil from "./VisitorProfile";
import ConnectedProfil from "./ConnectedProfile";

function Profile() {
  const isConnected = false;
  return isConnected ? <ConnectedProfil /> : <VisitorProfil />;
}

export default Profile;
