import axios from 'axios';

export class CountriesServices {
    getCountries(success, failed) {
        axios.get('https://restcountries.eu/rest/v2/all').then(result => {
            success(result.data)
        }).catch(error => {
            failed(error)
        })
    }

    getCountriesByName(countryName, success, failed) {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`).then(result => {
            success(result.data)
        }).catch(error => {
            failed(error)
        })
    }
}