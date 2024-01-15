import "./ChargepointBook2.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChargepointBook2() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button type="button">cliquer</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="ChargepointBook2TextContainer">
          <Dialog.Description className="ChargepointBook2Text">
            Un tarif de 2 euros vous sera facturés pour la réservation.
          </Dialog.Description>
          <Dialog.Description className="ChargepointBook2Text">
            Les frais de réservation ne seront pas remboursés en cas
            d'annulation.
          </Dialog.Description>
          <Dialog.Description className="ChargepointBook2Text">
            Êtes vous sûr de vouloir réserver ?
          </Dialog.Description>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ChargepointBook2;
