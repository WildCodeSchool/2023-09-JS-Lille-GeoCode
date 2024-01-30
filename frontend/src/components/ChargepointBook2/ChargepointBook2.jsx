import "./ChargepointBook2.scss";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function ChargepointBook2() {
  const { selectedTime, selectedVehicle, selectedStation } = useStore();
  const navigate = useNavigate();

  const formattedDate = format(selectedTime, "yyyy-MM-dd HH:mm:ss", {
    timeZone: "Europe/Paris",
  });
  const postBooking = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            formattedDate,
            selectedVehicle,
            selectedStation,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="ChargepointBook2TextContainer">
      <p className="ChargepointBook2Text">
        Un tarif de 2 euros vous sera facturé pour la réservation.
      </p>
      <p className="beCareful">
        Les frais de réservation ne seront pas remboursés en cas d'annulation.
      </p>
      <p className="ChargepointBook2Text">
        Êtes vous sûr de vouloir réserver ?
      </p>
      <footer>
        <button
          className="answerBtn"
          type="button"
          onClick={() => {
            postBooking(formattedDate, selectedVehicle);
            toast.success("Votre réservation est validée !", {
              theme: "colored",
              onClose: () => {
                setTimeout(() => {
                  navigate("/connection");
                }, 2000);
              },
            });
          }}
        >
          Oui
        </button>
        <button
          className="answerBtn"
          type="button"
          onClick={() =>
            toast.error(
              "La réservation a été abandonnée, et non prise en compte !",
              {
                theme: "colored",
                onClose: () => {
                  setTimeout(() => {
                    navigate("/connection");
                  }, 2000);
                },
              }
            )
          }
        >
          Non
        </button>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </footer>
    </main>
  );
}

export default ChargepointBook2;
