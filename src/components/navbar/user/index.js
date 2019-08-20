import React, { Component } from 'react'
import './user.css'

class User extends Component {

    render() {
        return <li className="user">
                <img className="img-user" src="img/omer_klein.png" alt="user pic" />
                <p>שלום <button>התחבר</button><button>הרשם</button>
                {/* <select>
                    <option></option><option>התנתק</option>
                    </select> */}
                    </p>
            </li>
    }
}

export default User