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
        const { home, goShooping } = this.props
        return <ul className='navbar'>
            <div className="icons">
                <User />
                <Cart />
            </div>
            <li className="title">
                <h1>Electro-Klein</h1>
                <button className={home ? 'push' : null} onClick={home ? null : () => goShooping()}  >Home</button>
                <button className={home ? null : 'push'} onClick={home ? () => goShooping() : null}>Shop</button>
            </li>
        </ul>

    }
}

export default Navbar