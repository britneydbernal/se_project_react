import "./ModalWithForm.css";
import closeIcon from "../../assets/close-grey.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  name,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === name ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form name={name} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
