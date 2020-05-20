import React from 'react';
import { CountriesBusiness } from '../business/CountriesBusiness';
import _ from 'lodash'

export default class CountriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesList: [],
            searchResult: [],
            searchValue: '',
        }
        this.countriesBusiness = new CountriesBusiness()
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    componentDidMount() {
        this.countriesBusiness.getCountriesInfo(
            getListSuccess => {
                this.setState({
                    countriesList: getListSuccess
                })
            },
            getListFailed => {
                alert(getListFailed)
            }
        )
    }

    onTextChanged(event) {
        this.setState({ searchValue: event.target.value });
        this.searchCountries(event.target.value)

    }

    searchCountries = _.debounce((searchValue) => {
        if (searchValue.trim().length > 0) {
            this.countriesBusiness.searchCountries(
                searchValue,
                searchSuccess => {
                    this.setState({
                        searchResult: searchSuccess
                    })
                },
                searchFailed => {
                    alert(searchFailed)
                }
            )
        }
    }, 500)

    render() {
        let countriesList = this.state.searchValue.trim().length > 0 ? this.state.searchResult : this.state.countriesList
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 70 * this.state.countriesList.length,
                    backgroundColor: '#282c34',
                    flexDirection: 'column'
                }}>

                <div style={{ marginTop: 50, display: 'flex', flexDirection: 'row' }}>
                    <input
                        placeholder="Search a country..."
                        value={this.state.searchValue}
                        style={{ height: 25, width: 250 }}
                        onChange={this.onTextChanged}
                    />
                </div>   

                {
                    countriesList.map(country => {
                        return (
                            <div style={{ display: 'flex' }} key={country.countryId}>
                                <img
                                    srcSet={country.countryFlag}
                                    alt="Country-Flag"
                                    height={25}
                                    width={25}
                                    style={{ marginTop: 23, marginRight: 10 }}
                                />
                                <p style={{ color: '#ffff', fontSize: 20 }}>{country.countryName}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}