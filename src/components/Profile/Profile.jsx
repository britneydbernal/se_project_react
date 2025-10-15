import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

export default function Profile({ clothingItems, onCardClick, onAddItem }) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothesSection onCardClick={onCardClick} clothingItems={clothingItems} />
    </section>
  );
}
