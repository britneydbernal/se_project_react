import "./ModalWithForm.css";
import closeIcon from "../../assets/close-grey.png";
import useModalClose from "../../hooks/useModalClose";

function ModalWithForm({
  children,
  buttonText = "Save",
  title,
  onClose,
  isOpen,
  name,
  onSubmit,
}) {
  useModalClose(isOpen, onClose);

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form name={name} className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
