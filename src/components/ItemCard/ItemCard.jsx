import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  const handleLike = () => {
    e.stopPropagation();
    onCardLike({ id: item._id, isLiked });
  };

  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button
            type="button"
            className={likeButtonClassName}
            onClick={handleLike}
          />
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
