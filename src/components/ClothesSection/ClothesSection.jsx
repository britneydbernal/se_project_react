import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  onAddClick,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          type="button"
          className="clothes-section__add-button"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
