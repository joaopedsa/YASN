import React, { Component } from 'react';

import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">

        <div className="profileContainerOne">
          <img alt="perfil"/>
          <div>name</div>
          <div>senha</div>
        </div>

        <div className="profileContainerTwo">
          <img alt="perfil"/>
          <div>name</div>
          <div>senha</div>
        </div>

        <div className="profileContainerThree">
          <img alt="perfil"/>
          <div>name</div>
          <div>senha</div>
        </div>

      </div>
    )
  }
}

export default Profile;
