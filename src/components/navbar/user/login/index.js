import React, { Component } from 'react'
import axios from 'axios'
import Singin from './signin'
import './login.css'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            signin: false
        }
    }

    submit = async (e) => {
        e.preventDefault()

        const { userName, password } = this.refs,
            users = [],
            { getUser, closeLogin } = this.props
        let index, confirmed

        await axios.get('http://localhost:1200/users').then(res => {
            users.push(res.data[0])
        })
            .catch(err => {
                console.log(err)
            })
        console.log(users)
        index = users.findIndex(user => user.userName === userName.value)
        if (index === -1) return alert('שם משתמש אינו נמצא במערכת')
        confirmed = users.find(user => user.password === password.value)
        if (!confirmed) alert('סיסמא שגויה - אנא נסה שוב')
        else {
            alert(`ברוכים הבאים לאתר ${userName.value}`)
            closeLogin()
            return getUser(users[index])
        }
    }

    render() {
        const { signin } = this.state
        return <div className="loginForm"> {signin ? <Singin /> : <form className='login' onSubmit={this.submit}>
            <label>
                <span>שם משתמש:</span>
                <input ref='userName' type='text' placeholder='שם משתמש' required />
            </label>
            <label>
                <span>סיסמא:</span>
                <input ref='password' type='password' placeholder='סיסמא' required />
            </label>
            <input className="submit" type='submit' value='התחבר' />
        </form>}

            <p className="loginBtn">{signin ? 'נרשמת כבר? לחץ ' : 'אינך רשום? לחץ '}<p className="signinBtn" onClick={() => this.setState({ signin: !signin })}>כאן</p> </p>
        </div>
    }
}

export default Login