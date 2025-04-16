import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoaderModeContext from "../contexts/LoaderModeContext"
import BoxcarContext from "../contexts/BoxcarContext"


function Card({ boxcar, onFavorite, onDelete }) {

    const { setInEditMode } = useContext(LoaderModeContext)
    const { setSelectedBoxcar } = useContext(BoxcarContext)

    const navigate = useNavigate()

const onClick = (e) => {
    let obj = boxcar
    const { name } = e.currentTarget
    if(name === 'star') {
        onFavorite(boxcar)
    } else {
        if(name === 'view') {
            setSelectedBoxcar(obj)
            navigate(`/item/${boxcar.id}`)
    } else {
        if(name === 'edit') {
            setInEditMode(true)
            setSelectedBoxcar(boxcar)
     
        } else {
            if(name === 'delete') {
                onDelete(boxcar.id) 
            }
        }
    }
}
}

return (
<>
<tr id={boxcar.id}>
    <td>
        <button type='button' name='star' onClick={onClick}>
            {boxcar.favorite ? "★" : "☆"}
        </button>
        </td>
        <td>
        <button type='button' name='view' onClick={onClick}>
            {boxcar.model}
        </button>
        </td>
        <td>{boxcar.make}</td>
        <td>{boxcar.manufacturer}</td>
        <td>{boxcar.year}</td>
        <td>{boxcar.country}</td>
        <td>{boxcar.discontinued ? "✕" : "✓"}</td>
        <td>
        <button type='button' name='edit' onClick={onClick}>
           Edit
        </button></td>
        <td>
        <button type='button' name='delete' onClick={onClick}>
            Delete
        </button>
    </td>
</tr>
</>
)}

export default Card
