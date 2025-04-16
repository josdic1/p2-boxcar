import { useNavigate } from "react-router-dom"

function Card({ boxcar, onFavorite, onDelete }) {

    const navigate = useNavigate()

const onClick = (e) => {
    const { name } = e.currentTarget
    if(name === 'star') {
        onFavorite(boxcar)
    } else {
        if(name === 'view') {
            navigate(`/item/${boxcar.id}`)
    } else {
        if(name === 'edit') {

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
