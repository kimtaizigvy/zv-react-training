import React, { useState, useEffect } from 'react';
import MainHeader from "../../components/headers/MainHeader";
import {
    Switch,
    Route,
    useRouteMatch,
    Redirect,
    useHistory,
} from "react-router-dom";
import ls from 'local-storage'
import Home from './Home';
import MyInfo from './MyInfo';
import Users from './Users';
import UserServices from '../../services/UserServices'
const userSerives = new UserServices()

function MainPage() {
    let { path } = useRouteMatch();
    let { push } = useHistory()
    const [myInfo, setMyInfo] = useState({})
    useEffect(() => {
        userSerives.getMyInfo(
            getInfoSuccess => {
                if (!!getInfoSuccess) {
                    setMyInfo(getInfoSuccess);
                } else {
                    alert('Get info failed')
                }
            },
            getInfoFailed => {
                ls.clear()
                push('/authenticate')
            }
        )
    }, [])

    if (myInfo.role !== undefined) {
        return (
            <div>
                <MainHeader myInfo={myInfo} />
                <Switch>
                    <Route exact path={path}>
                        <Home />
                    </Route>
                    <Route exact path={`${path}/my-info`}>
                        <MyInfo />
                    </Route>
                    <Route path={`${path}/users`}>
                        {myInfo.role === 'Admin' ? (<Users />) : (<Redirect to="/main" />)}
                    </Route>
                </Switch>
            </div>
        );
    } else {
        return null
    }
}

export default MainPage