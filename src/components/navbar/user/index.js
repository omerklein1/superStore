import React, { Component } from 'react'
import Modal from '../../modal'
import { connect } from 'react-redux'
import { adminState } from '../../../actions'
import './user.css'

class User extends Component {
    
    render() {
        const { adminState, admin } = this.props
        return <li className="user">
            <img className="img-user" src="img/omer_klein.png" alt="user pic" />
            <p>שלום </p>
<button onClick={() => this.openPop()}>התחבר</button>
 <button onClick={() => this.openPop()}>הרשם</button>
  <button onClick={() => adminState(admin)}>{admin? 'מצב מנהל': 'עבור למצב מנהל'}</button>

        </li>
    }
}

export default connect(state => ({
    admin: state.admin
}), { adminState })(User);