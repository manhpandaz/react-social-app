import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Righbar from "../../components/rightbar/Righbar";
import { Users } from "../../dummyData";
import "./home.css";

function Home(props) {
  const [currentUser, setCurrentUser] = useState(Users[0].profilePicture);
  return (
    <>
      {currentUser && <Topbar key={Users.id} user={currentUser} />}
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Righbar />
      </div>
    </>
  );
}

export default Home;
