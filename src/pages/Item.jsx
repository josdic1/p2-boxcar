import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import BoxcarContext from "../contexts/BoxcarContext"

function Item() {
    const [thisBoxcar, setThisBoxcar] = useState('')
    const { boxcars } = useContext(BoxcarContext)
    const { id } = useParams()
  

    useEffect(() => {
       const updated = boxcars.find(b => b.id === id )
       setThisBoxcar(updated)
    },[id])

    return (
    <>

    <img src={thisBoxcar.image} alt='photo' />
    </>
    )}
    
    export default Item