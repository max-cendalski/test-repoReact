import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryInput : '',
      cityInput: ''
    }
  }
  handleFormSubmit(event) {
    this.setState({
      countryInput: event.target.value.country
      cityInput: event.target.value.city
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>Country</label>
          <input id="country-input" value="country"></input>
          <label>City</label>
          <input id="city-input" value="city"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
