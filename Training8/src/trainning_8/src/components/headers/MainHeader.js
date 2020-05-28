import React from 'react';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import ls from 'local-storage'

function MainHeader({ myInfo }) {
    let { push } = useHistory()
    let { pathname } = useLocation()
    let tabName = pathname.split('/')[2]

    return (
        <header style={{ backgroundColor: '#282c34', height: 45, alignItems: 'center', display: 'flex', borderBottom: "0.5px solid gray" }}>
            <p style={{ flex: 0.72, marginLeft: 20, color: '#ffff' }}>Welcome {myInfo.displayName}</p>
            <ul style={{ flex: 0.23, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', listStyle: 'none' }}>
                <li>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: tabName == undefined ? '#fff' : '#DEDEDE',
                            fontWeight: tabName == undefined ? '600' : '400'
                        }}
                        onClick={() => { push("/main") }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: tabName === 'my-info' ? '#fff' : '#DEDEDE',
                            fontWeight: tabName == 'my-info' ? '600' : '400'
                        }}
                        onClick={() => { push("/main/my-info", { myInfo: myInfo }) }}
                    >
                        My info
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: tabName == 'users' ? '#fff' : '#DEDEDE',
                            fontWeight: tabName == 'users' ? '600' : '400'
                        }}
                        onClick={() => { push("/main/users") }}
                    >
                        Users
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: '#DEDEDE',
                            fontWeight: '400'
                        }}
                        onClick={() => {
                            ls.clear()
                            push("/authenticate")
                        }}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader