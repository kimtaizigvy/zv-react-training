import React from 'react';
import {
    useLocation
} from "react-router-dom";

function MyInfo() {
    let { state } = useLocation()

    return (
        <div>
            {
                !!state.myInfo ? (
                    <div style={{ display: 'flex', height: 1000, alignItems: 'center', flexDirection: 'column' }}>
                        <p>My Name: {state.myInfo.displayName}</p>
                        <p>Email: {state.myInfo.username}</p>
                        <p>Role: {state.myInfo.role}</p>
                    </div>
                ) : null
            }
        </div>
    )
}

export default MyInfo