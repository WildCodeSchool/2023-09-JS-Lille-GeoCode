import { useNavigate } from "react-router-dom";

function Redirection() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)}>
      go back
    </button>
  );
}
export default Redirection;
