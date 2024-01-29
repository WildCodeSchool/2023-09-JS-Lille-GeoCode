import "./ChargepointBook2.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChargepointBook2() {
  return (
    <main className="ChargepointBook2TextContainer">
      <header className="ChargepointBook2Text">
        Un tarif de 2 euros vous sera facturés pour la réservation.
      </header>
      <section className="beCareful">
        Les frais de réservation ne seront pas remboursés en cas d'annulation.
      </section>
      <section className="ChargepointBook2Text">
        Êtes vous sûr de vouloir réserver ?
      </section>
      <footer>
        <button
          className="answerBtn"
          type="button"
          onClick={() =>
            toast.success("Votre réservation est validée !", {
              theme: "colored",
            })
          }
        >
          Oui
        </button>
        <button
          className="answerBtn"
          type="button"
          onClick={() =>
            toast.error(
              "La réservation a été abandonnée, et non prise en compte !",
              { theme: "colored" }
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
