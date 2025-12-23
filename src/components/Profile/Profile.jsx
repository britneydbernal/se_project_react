import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  onEditProfileClick,
  onCardLike,
  onSignOut,
}) {
  return (
    <section className="profile">
      <Sidebar onEditProfileClick={onEditProfileClick} onSignOut={onSignOut} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        onAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
