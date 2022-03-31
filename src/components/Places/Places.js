import "./places.css"
import "../Form/Form"
import "../Places/Places"
import Navbar from "../Navbar/Navbar"
import { useState, useEffect } from "react"
export default function Places(props) {

let countries = []
let cities = []

const [locations, setLocation] = useState([])
console.log('locations',locations)

useEffect(() => {
  const data = localStorage.getItem('my-places')
  if (data) {
    setLocation(JSON.parse(data))
  }
},[]);

useEffect(()=> {
  localStorage.setItem('my-places',JSON.stringify(locations))
})

function addLocation(locations) {
  setLocation([...locations])
}

function addCountry(country) {
  countries.push(country)
}

function addCity(city) {
  cities.push(city)
  }
    return (
      <>
       <Navbar />
       <div className="list-container">
        <ul>
          {
            locations.map(location => (
            <li className="list-element" key={location.country}>{location.country} : {location.city}</li>
          ))
          }
        </ul>
      </div>

      </>


    )
}


/*
 <Places countries={countries}
            cities={cities}
            locations={locations}
            />
 */
/*    <Form countries={countries}
            addCountry={addCountry}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
            locations = {locations}
            /> */
