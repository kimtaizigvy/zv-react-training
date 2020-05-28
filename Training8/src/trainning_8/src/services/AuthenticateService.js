import axios from 'axios'
import ls from 'local-storage'
import { BASE_URL } from '../utils/config';

export default class AuthenticateServices {
    login = (userName, password, success, failed) => {
        axios.post(`${BASE_URL}/login`, {
            email: userName,
            password: password
        }).then( result => {
            ls('TOKEN', result.data.token)
            success(result.data.token)
        }).catch(err => {
            console.log('errr', err)
            failed(err)
        })
    }
}