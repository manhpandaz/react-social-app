import React from "react";
import "./online.css";
function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rigthbarProfileImgContainer">
        <img src={user.profilePicture} className="rightbarProfileImg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

export default Online;
