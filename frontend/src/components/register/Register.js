import React, { Component } from 'react';

import './Register.css';


class Register extends Component {

    render() {
        return (
            <div className="register-wrapper">
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
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
    }
}

export default Register
