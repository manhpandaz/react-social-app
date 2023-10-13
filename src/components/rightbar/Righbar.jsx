import React from "react";
import "./rightbar.css";

import { Users } from "../../dummyData";
import Online from "../online/Online";

const Righbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <div className="birthdayText">
            <b>Pola Foster </b> and <b>3 other friends </b>have a birthday
          </div>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Marid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip:</span>
            <span className="rightbarInfoValue">single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">name</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">name</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">name</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              className="rightbarFollowingImg"
              alt=""
            />
            <span className="rightbarFollowingName">name</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Righbar;
