import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData, getCurrentUserId } from "../../store/users";
import Loader from "../common/loader";

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  const currentUserId = useSelector(getCurrentUserId());
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(prevState => !prevState);
  };
  if (!currentUser) return <Loader />;
  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center">
        <div className="me-2">{currentUser.name}</div>
        <img src={ currentUser.image }
          height="40"
          alt=""
          className="img-responsive rounded-circle" />
      </div>
      <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
        <Link to={`/users/${currentUserId}`} className="dropdown-item">Profile</Link>
        <Link to="/logout" className="dropdown-item">Logout</Link>
      </div>
    </div>
  );
};

export default NavProfile;
