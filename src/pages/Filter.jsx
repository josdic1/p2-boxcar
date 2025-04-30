import { useContext } from "react"
import BoxcarContext from "../contexts/BoxcarContext"

function Filter({ onChange, onClear, objValues }) {
    const { boxcars } = useContext(BoxcarContext)

    const uniqueMakes = [...new Set(boxcars.map(b => b.make))].sort((a, b) => a.localeCompare(b))
    const uniqueCountries = [...new Set(boxcars.map(b => b.country))].sort((a, b) => a.localeCompare(b))



    return (
        <>
            <input
                type="text"
                name='model'
                placeholder="Search Models..."
                onChange={onChange}
                value={objValues.model}
            />

<select name="make" onChange={onChange} value={objValues.make}>
        <option value={"all"}>All Makes</option>
        {uniqueMakes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>

      <select name="country" onChange={onChange} value={objValues.country}>
        <option value="all">All Countries</option>
        {uniqueCountries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

            Discont. <input type='checkbox' name='discontinued' onChange={onChange} checked={objValues.discontinued} />
            <button type="button" name="clear" onClick={onClear}>Clear</button>
        </>
    )
}

export default Filter

