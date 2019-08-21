import React, { Component } from 'react'
import Title from './title'
import Cart from './cart'
import User from './user'
import './navbar.css'

class Navbar extends Component {

    render() {
        return <ul className='navbar'>
            <User />
            <Title />
            <Cart />
        </ul>
    }
}

export default Navbar