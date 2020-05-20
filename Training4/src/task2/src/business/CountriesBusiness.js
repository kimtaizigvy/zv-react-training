import { CountriesServices } from "../services/CountriesServices"
const countriesServices = new CountriesServices();

export class CountriesBusiness {
    getCountriesInfo(success, failed) {
        countriesServices.getCountries(
            countriesList => {
                let countries = this.filterCountriesData(countriesList)
                success(countries)
            },
            getCountriesListFailed => {
                failed(getCountriesListFailed)
            }
        );
    }

    searchCountries(countryName, success, failed) {
        countriesServices.getCountriesByName(
            countryName,
            searchSuccess => {
                let searchResult = this.filterCountriesData(searchSuccess)
                success(searchResult)
            },
            searchFailed => {
                failed(searchFailed)
            }
        )
    }

    filterCountriesData(countriesList) {
        var countries = [];
        countriesList.forEach((country, index) => {
            let countryInfo = {
                countryId: index,
                countryFlag: country.flag,
                countryName: country.name
            }
            countries.push(countryInfo)
        });
        return countries;
    }
}