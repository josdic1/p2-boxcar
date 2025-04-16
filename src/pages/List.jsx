import { useState, useEffect, useContext } from "react"
import Filter from "../pages/Filter"
import BoxcarContext from "../contexts/BoxcarContext"
import Card from "../components/Card"

function List() {

    const { boxcars, handleFavorite, handleDelete } = useContext(BoxcarContext)

    const [dispList, setDispList ] = useState(boxcars)
    
    const [objValues, setObjValues] = useState({
        textFilter: '',
        countryFilter: 'all',
        discontinuedFilter: false
     })

     useEffect(() => {
        console.log('tick')
     },[objValues])

     const handleChange = (e) => {
        const { name, value, type, checked } = e.currentTarget
        console.log(name, value, type, checked)
     }


    const boxcarList = dispList.map(b => (
        <Card key={b.id} boxcar={b} onFavorite={handleFavorite} onDelete={handleDelete}/>
    ))

 
    return (
    <>
    <Filter onChange={handleChange} objValues={objValues}/>
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