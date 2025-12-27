import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./Sidebar.css";

export default function Sidebar({ onEditProfileClick, onSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__user-info">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={`Profile avatar of ${currentUser?.name}`}
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {getInitial(currentUser?.name)}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          type="button"
          className="sidebar__edit-profile-button"
          onClick={onEditProfileClick}
        >
          Change Profile data
        </button>
        <button
          type="button"
          className="sidebar__signout-button"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
