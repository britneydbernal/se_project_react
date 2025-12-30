import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./ItemModal.css";
import closeIcon from "../../assets/close.png";
import useModalClose from "../../hooks/useModalClose";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?._id;

  useModalClose(activeModal === "preview", onClose);

  return (
    <div
      className={`modal item-modal ${
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
          {isOwn && (
            <button
              type="button"
              className="item-modal__delete-button"
              onClick={() => onDelete(card._id)}
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
