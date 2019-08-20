import React, { Component } from 'react'
import './user.css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true };
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
        let { isLoggedIn } = this.state
        return <li className="user">
            <img className="img-user" src="img/omer_klein.png" alt="user pic" />
            <p>שלום </p>    
            
            {isLoggedIn? <><button onClick={()=>this.openPop()}>התחבר</button> <button onClick={()=>this.openPop()}>הרשם</button></> : <div className='popup'>
            <div className='popup_inner'>
                <h1>{this.props.text}</h1>
                <button onClick={()=>this.handleClick()}>close me</button>
            </div>
        </div>}
            

        </li>
    }
}

export default User