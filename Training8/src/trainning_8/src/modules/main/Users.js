import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";
import ls from 'local-storage'
import UserInfo from './UserInfo'
import UserServices from '../../services/UserServices'
const userServices = new UserServices();

function Users() {
    const [usersList, setUsersList] = useState([]);
    let { path } = useRouteMatch();
    let { push } = useHistory()
    let { pathname } = useLocation()

    useEffect(() => {
        userServices.getUsers(
            getUserListSuccess => {
                setUsersList(getUserListSuccess)
            },
            getUserListFailed => {
                ls.clear()
                alert('Token expired')
                push('/authenticate')
            }
        )
    }, [])

    return (
        <div>
            <div style={{ height: 1000, flexDirection: "row", display: 'flex' }}>
                <div style={{ flex: 2, backgroundColor: '#DEDEDE', borderRight: "0.25px solid gray" }}>
                    <ul style={{ listStyle: 'none' }}>
                        {
                            usersList.length > 0
                                ? usersList.map(user => {
                                    return (
                                        <li style={{ marginTop: 15 }} key={user.id}>
                                            <a
                                                style={{ 
                                                    textDecoration: 'none', 
                                                    color: pathname.split('/')[3] === user.id ? 'black' : '#454544', 
                                                    fontWeight: pathname.split('/')[3] === user.id ? '700' : '400'
                                                }}
                                                onClick={() => { push(`${path}/${user.id}`) }}
                                            >
                                                {user.fullName}
                                            </a>
                                        </li>
                                    )
                                }) : null
                        }
                    </ul>
                </div>
                <div style={{ flex: 8 }}>
                    <Switch>
                        <Route path={`${path}/:userId`}>
                            {
                                usersList.length > 0 ? (<UserInfo usersList={usersList} />) : null
                            }
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Users