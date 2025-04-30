import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import BoxcarContext from "../contexts/BoxcarContext"
import viteLogo from '/vite.svg'

function Item() {
    const [thisBoxcar, setThisBoxcar] = useState('')
    const { boxcars } = useContext(BoxcarContext)
    const { id } = useParams()
  
    useEffect(() => {
      if (boxcars.length > 0) {
        const found = boxcars.find(b => b.id === id)
        setThisBoxcar(found)
      }
    }, [boxcars, id])

    return (
    <>
      <h1>{thisBoxcar?.year} {thisBoxcar?.model}</h1>
      <h2>{thisBoxcar?.make}</h2>
      {thisBoxcar?.image ? <img src={thisBoxcar.image} alt='photo' className="boxcar-profile" /> : <img src={viteLogo} alt='photo' className="logo" /> }

    </>
    )}
    
    export default Item