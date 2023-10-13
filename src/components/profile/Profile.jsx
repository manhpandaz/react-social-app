import React from "react";
import "./profile.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import Righbar from "../rightbar/Righbar";
function Profile(props) {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Username</h4>
              <span className="profileInfoDesc">Hello my friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Righbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
