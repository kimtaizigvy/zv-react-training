import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";

function UserInfo({ usersList }) {
    const { userId } = useParams();
    const userInfo = usersList.filter(u => u.id == userId)

    return (
        <div style={{ display: 'flex', flex: 1, height: '100%', alignItems: 'center', flexDirection: 'column' }}>
            {
                userInfo.length > 0 ? (
                    <>
                        <p>User: {userInfo[0].fullName}</p>
                        <p>Email: {userInfo[0].email}</p>
                        <p>Role: {userInfo[0].role}</p>
                    </>
                ) : <p>No info of this user</p>
            }
        </div>
    )
}

export default UserInfo