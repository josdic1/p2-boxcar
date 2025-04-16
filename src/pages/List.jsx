import { useEffect, useContext } from "react"

import BoxcarContext from "../contexts/BoxcarContext"
import Card from "../components/Card"

function List() {

    const { boxcars, handleFavorite, handleDelete } = useContext(BoxcarContext)


    const boxcarList = boxcars.map(b => (
        <Card key={b.id} boxcar={b} onFavorite={handleFavorite} onDelete={handleDelete}/>
    ))
 




    return (
    <>
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