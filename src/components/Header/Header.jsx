import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrance Tegegne</p>
          <img
            src={avatar}
            alt="Profile avatar of Terrance Tegegne"
            className="header__avatar"
          />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
