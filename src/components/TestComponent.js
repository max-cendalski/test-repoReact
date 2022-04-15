
import './test.css'

export default function TestComponent (props) {
  //console.log('props placeToSave',props.placeToSave.length)
  return (
    <section className='test-component-header'>
      <h2>Test Component</h2>
      <h3>Location to save: {props.placeToSave}</h3>
      <button>Add to locations list</button>
      <section>
        <h2>Locations to display</h2>
        <h4>{props.cityToSave}</h4>
        <h4>{props.countryToSave}</h4>
      </section>
    </section>
  )
}
