import "./ItemModal.css";
import closeIcon from "../../assets/close.svg";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div
      className={`item-modal ${
        activeModal === "preview" ? "item-modal__opened" : ""
      }`}
    >
      <div className="item-modal__content item-modal__content_type_image">
        <button onClick={onClose} type="button" className="item-modal__close">
          <img src={closeIcon} alt="Close" className="item-modal__close-icon" />
        </button>
        <img src={card.link} alt={card.name} className="item-modal__image" />
        <div className="item-modal__footer">
          <h2 className="item-modal__caption">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
