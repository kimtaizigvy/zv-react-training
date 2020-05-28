import React, { useEffect } from 'react';
import LoginHeader from "../../components/headers/LoginHeader";
import Login from './Login';
import {
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import ls from 'local-storage'
import Signup from './Signup';

function AuthenPage() {
    let { path } = useRouteMatch();
    let { push } = useHistory()

    useEffect(()=>{
        if(!!ls.get('TOKEN')){
            push('/main')
        }
    })

    return (
        <div>
            <LoginHeader />
            <Switch>
                <Route exact path={`${path}`}>
                    <Login />
                </Route>
                <Route exact path={`${path}/signup`}>
                    <Signup />
                </Route>
            </Switch>
        </div>
    )
}

export default AuthenPage