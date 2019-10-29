import React, { Component } from 'react'
import Title from './title'
import Cart from './cart'
import User from './user'
import './navbar.css'

class Navbar extends Component {

    handleScroll = e => {
        let element = e.target
        // if (element.scrollHeight > element.scrollTop === element.clientHeight) {
        //   // do something at end of scroll
        // }
        console.log(element.scrollHeight, element.scrollTop, element.clientHeight)
    }


    render() {
        return <ul className='navbar'>
            <div className="icons">
                <User />
                <Cart />
            </div>
            <Title />
        </ul>

    }
}

export default Navbar