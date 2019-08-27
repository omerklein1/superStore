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

    getUser = user => {
this.setState({ user: user})
    }

    closeLogin = () => {
this.setState({openLogin: false})
    }

    render() {
        const { adminState, admin } = this.props,
            { openLogin, addProduct, user } = this.state
        return <li className="user">
            <img className="img-user" src={user? user.image : 'https://static.thenounproject.com/png/17241-200.png'} alt="user pic" />
            <p>{user? `שלום ${user.userName}` : null}</p>
            <button onClick={() => this.setState(user? {user: ''} : {openLogin: !openLogin})}>{user? 'התנתק' : 'התחבר'}</button>
            { user? <button onClick={() => adminState(admin)}>{admin ? 'מצב מנהל' : 'עבור למצב מנהל'}</button> : null}
            <Modal open={openLogin} title="התחבר לאתר">
                <Login getUser={this.getUser} closeLogin={this.closeLogin}/>
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