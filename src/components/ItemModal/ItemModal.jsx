import "./ItemModal.css";
import closeIcon from "../../assets/close.png";

function ItemModal({ activeModal, onClose, card, onDelete }) {
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
        <img
          src={card.imageUrl}
          alt={`Clothing item: ${card.name}, suitable for ${card.weather} weather`}
          className="item-modal__image"
        />
        <div className="item-modal__footer">
          <h2 className="item-modal__caption">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
          <button
            type="button"
            className="item-modal__delete-button"
            onClick={() => onDelete(card.id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
