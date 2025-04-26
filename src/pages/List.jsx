import { useState, useEffect, useContext } from "react"
import Filter from "../pages/Filter"
import BoxcarContext from "../contexts/BoxcarContext"
import Card from "../components/Card"

function List() {

    const { boxcars, handleFavorite, handleDelete } = useContext(BoxcarContext)
    
    const [objValues, setObjValues] = useState({
        textFilter: '',
        countryFilter: 'all',
        discontinuedFilter: false
     })

     const [ filteredList, setFilteredList ] = useState(boxcars)
 
     useEffect(() => {
      setFilteredList(boxcars)
     },[])


     useEffect(() => {
        const filters = {
          tag: val => val.toLowerCase().includes(objValues.textFilter.toLowerCase()),
          country: val => objValues.countryFilter === 'all' || val === objValues.countryFilter,
          discontinued: val => !objValues.discontinuedFilter || val === true 
        }
      
        const normalizedBoxcars = boxcars.map(b => ({
          ...b,
          tag: b.tag || `${b.make} ${b.model}`.toLowerCase()
        }))
      
        const filtered = normalizedBoxcars.filter(b =>
          filters.tag(b.tag) &&
          filters.country(b.country) &&
          filters.discontinued(b.discontinued)
        )
      
        const sorted = filtered.sort((a, b) => b.favorite - a.favorite)
      
        setFilteredList(sorted)
      
      }, [objValues, boxcars])
      
      
    



    const boxcarList = filteredList.map(b => (
        <Card key={b.id} boxcar={b} onFavorite={handleFavorite} onDelete={handleDelete}/>
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
    <Filter objValues={objValues} onChange={handleChange}/>
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
    )}
    
    export default List