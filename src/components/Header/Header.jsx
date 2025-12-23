import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({
  handleAddClick,
  weatherData,
  onRegisterClick,
  onSignInClick,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <header className="header">
      <NavLink className="header__logo-link" to="/">
        <img className="header__logo" src={logo} alt="WTWR app logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        {!isLoggedIn ? (
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
        ) : null}
      </div>
      {!isLoggedIn ? (
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-container">
            <p className="header__username">{currentUser?.name}</p>
            {currentUser?.avatar ? (
              <img
                src={currentUser.avatar}
                alt={`Profile avatar of ${currentUser?.name}`}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {getInitial(currentUser?.name)}
              </div>
            )}
          </div>
        </NavLink>
      ) : (
        <div className="header__auth-buttons">
          <button
            onClick={onRegisterClick}
            type="button"
            className="header__register-button"
          >
            Sign Up
          </button>
          <button
            onClick={onSignInClick}
            type="button"
            className="header__signin-button"
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
