import React, { useState } from 'react';
import {
    useRouteMatch,
    useHistory
} from "react-router-dom";
import AuthenticateServices from '../../services/AuthenticateService';
const authenticateServices = new AuthenticateServices()

function Login() {
    const [userName, setUserName] = useState('');
    const [passwords, setPasswords] = useState('');
    const { push } = useHistory()
    let { path } = useRouteMatch();

    const onSignupClick = () => {
        push(`${path}/signup`)
    }

    const onLoginClick = (e) => {
        e.preventDefault()
        if (userName.trim().length > 0 && passwords.trim().length > 0) {
            authenticateServices.login(
                userName,
                passwords,
                loginSuccess => {
                    if (!!loginSuccess) {
                        push('/main')
                    } else {
                        alert('Login failed')
                    }
                },
                loginFailed => {
                    alert('Login failed with error: ', loginFailed)
                }
            )
        }
    }

    return (
        <div style={{ height: 507, backgroundColor: '#282c34', display: 'flex', justifyContent: 'center' }}>
            <form style={{ display: 'flex', flexDirection: 'column', marginTop: 50, alignItems: 'center' }}>
                <h2 style={{ color: '#fff' }}>LOGIN</h2>
                <input
                    style={{ marginBottom: 5 }}
                    placeholder="Username"
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={userName}
                />
                <input
                    placeholder="Password"
                    onChange={(e) => { setPasswords(e.target.value) }}
                    value={passwords}
                    type="password"
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <button onClick={onLoginClick} style={{ marginRight: 10 }}>Login</button>
                    <button onClick={onSignupClick}>
                        Signup
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login