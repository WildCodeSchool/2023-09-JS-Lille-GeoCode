import PropTypes from "prop-types";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./DeleteCarConfirmationModal.scss";

function DeleteCarConfirmationModal({ user }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        {user.car && (
          <button type="button" className="addCar">
            Supprimer la voiture
          </button>
        )}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Êtes vous vraiment sur de vouloir supprimé cette voiture ?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Cette action va supprimer votre voiture définitivement.
          </AlertDialog.Description>
          <footer className="chooseButton">
            <AlertDialog.Cancel asChild>
              <button type="button" className="carButtonDelete">
                Annuler
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button type="button" className="carButtonDelete">
                Oui
              </button>
            </AlertDialog.Action>
          </footer>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
DeleteCarConfirmationModal.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    car: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DeleteCarConfirmationModal;
