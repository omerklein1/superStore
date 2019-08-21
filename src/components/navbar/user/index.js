import React, { Component } from 'react'
import Login from './login'
import './user.css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            admin: false
        };
    }
    handleClick = (isLoggedIn) => {
        this.setState({ isLoggedIn: true });
    }
    openPop = () => {
        this.setState({ isLoggedIn: false });
    }


    login = () => {
        return
    }

    render() {
        let { isLoggedIn, admin } = this.state
        return <li className="user">
            <img className="img-user" src="img/omer_klein.png" alt="user pic" />
            <p>שלום </p>

            {isLoggedIn ? <><button onClick={() => this.openPop()}>התחבר</button> <button onClick={() => this.openPop()}>הרשם</button> <button onClick={() => this.setState({ admin: !admin })}>עבור למצב מנהל</button></> : <Login handleClick={this.handleClick} />}


        </li>
    }
}

export default User