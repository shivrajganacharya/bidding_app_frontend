import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserItems from '../components/UserItems'
import ShowItems from "./ShowItems";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3 >
          <strong style={{textTransform: "uppercase"}}>{currentUser.username}</strong> Profile
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}

      <h2>Username : {currentUser.username} </h2><br></br>
      <h2>Email : {currentUser.email} </h2><br></br>
      <h2>Authorities:</h2>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <h3><li key={index}>{role}</li></h3>)}
      </ul>

    </div>
    
    

  );
};

export default Profile;
