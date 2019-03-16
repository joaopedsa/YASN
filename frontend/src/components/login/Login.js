import React, { Component } from 'react';

import "./Login.css"

class Login extends Component {
  render() {
    return (
        <div className="login-wrapper">
            <div>
                YASN
                <p>Yet Another Social Network</p>
            </div>
            <form>
                <input 
                    placeholder="Username" 
                />
                <input 
                    placeholder="Password" 
                    type="password"
                />
                <button type="submit">Entrar</button>
                <a href="/register">Crie sua Conta</a>
            </form>
        </div>
    )
  }
}

export default Login;
