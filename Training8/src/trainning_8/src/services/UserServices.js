import axios from 'axios';
import ls from 'local-storage'
import { BASE_URL } from '../utils/config';

export default class UserServices {
    getMyInfo(success, failed) {
        let token = ls.get('TOKEN')
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(
            `${BASE_URL}/api/users/my`,
            config
        ).then(result => {
            let user = {
                id: result.data.id,
                username: result.data.email,
                displayName: result.data.fullName,
                role: result.data.role
            }
            success(user)
        }).catch(err => {
            failed('Token expired')
        })
    }

    getUsers(success, failed) {
        let token = ls.get('TOKEN')
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(
            `${BASE_URL}/api/users`,
            config
        ).then(result => {
            console.log('res', result.data.users)
            success(result.data.users)
        }).catch(err => {
            console.log('err', err)
            failed(err)
        })
    }
}