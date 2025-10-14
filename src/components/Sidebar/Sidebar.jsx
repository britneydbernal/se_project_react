import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";

export default function Sidebar() {
  const username = "Terrance Tegegne";
  const avatarUrl = avatar;

  return (
    <aside className="sidebar">
      <div className="sidebar__user-info">
        <p className="sidebar__username">{username}</p>
        <img
          src={avatarUrl}
          alt={`Profile avatar of ${username}`}
          className="sidebar__avatar"
        />
      </div>
    </aside>
  );
}
