import { useState, useEffect, useContext } from "react"
import Filter from "../pages/Filter"
import BoxcarContext from "../contexts/BoxcarContext"
import Card from "../components/Card"

function List() {

  const { boxcars, handleFavorite, handleDelete } = useContext(BoxcarContext)

  const [objValues, setObjValues] = useState({
    model: '',
    make: 'all',
    country: 'all',
    discontinued: false
  })

  const [filteredList, setFilteredList] = useState(boxcars)

  useEffect(() => {
    setFilteredList(boxcars)
  }, [])

  useEffect(() => {
    const filtered = boxcars.reduce((acc, car) => {
      const matches = {

        model: objValues.model === "" || car.model.toLowerCase().includes(objValues.model.toLowerCase()),

        make: objValues.make === "all" || car.make.toLowerCase() === objValues.make.toLowerCase(),

        country: objValues.country === "all" || car.country.toLowerCase() === objValues.country.toLowerCase(),

        discontinued: !objValues.discontinued || car.discontinued
      }

      return Object.values(matches).every(Boolean) ? [...acc, car] : acc

    }, [])
    setFilteredList(filtered)
  }, [boxcars, objValues])


  function handleClear() {
    setObjValues({
      model: '',
      make: 'all',
      country: 'all',
      discontinued: false
    })
  }


  const boxcarList = filteredList.map(b => (
    <Card key={b.id} boxcar={b} onFavorite={handleFavorite} onDelete={handleDelete} />
  ))

  const handleChange = (e) => {
    const { name, type, value, checked } = e.currentTarget
    setObjValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

  }


  return (
    <>
      <Filter objValues={objValues} onChange={handleChange} onClear={handleClear} />
      <table>
        <thead>
          <tr>
            <th> ★ </th>
            <th>View</th>
            <th>Make</th>
            <th>Year</th>
            <th>Country</th>
            <th>Avail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {boxcarList}
        </tbody>
      </table>
    </>
  )
}

export default List