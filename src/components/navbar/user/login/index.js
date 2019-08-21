import React, { Component } from 'react'
import './login.css'

class Login extends Component {

    render() {
        return <div className='popup'>
        <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <button onClick={()=>this.props.handleClick()}>close me</button>
        </div>
    </div>
    }
}

export default Login