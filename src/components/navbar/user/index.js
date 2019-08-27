import React, { Component } from 'react'
import Modal from '../../modal'
import AddNewProduct from './addNewProduct'
import { connect } from 'react-redux'
import { adminState } from '../../../actions'
import Login from './login'
import './user.css'

class User extends Component {
    constructor() {
        super()
        this.state = {
            openLogin: false,
            addProduct: false
        }
    }

    render() {
        const { adminState, admin } = this.props,
            { openLogin, addProduct } = this.state
        return <li className="user">
            <img className="img-user" src="img/omer_klein.png" alt="user pic" />
            <p>שלום </p>
            <button onClick={() => this.setState({ openLogin: !openLogin })}>התחבר</button>
            <button onClick={() => adminState(admin)}>{admin ? 'מצב מנהל' : 'עבור למצב מנהל'}</button>
            <Modal open={openLogin} title="התחבר לאתר">
                <Login />
            </Modal>

            {admin? <><button onClick={() => this.setState({ addProduct: !addProduct })}> + הוסף מוצר חדש</button><Modal open={addProduct} title="הוסף מוצר חדש">
                <AddNewProduct />
                </Modal></> : null}
                
        </li>
    }
}

export default connect(state => ({
    admin: state.admin
}), { adminState })(User);