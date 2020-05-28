import React from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
    let { push } = useHistory()
    return (
        <div style={{ height: 507, backgroundColor: '#282c34', display: 'flex', justifyContent: 'center' }}>
            <form style={{ display: 'flex', flexDirection: 'column', marginTop: 50, alignItems: 'center' }}>
                <h2 style={{ color: '#fff' }}>SIGNUP AN ACCOUNT</h2>
                <input style={{ marginBottom: 5 }} placeholder="Type username..."/>
                <input placeholder="Type password..."/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <button onClick={() => { push('/authenticate') }}>Create Account</button>
                    <button onClick={() => { push('/authenticate') }}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default Signup