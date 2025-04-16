import { useState, useEffect, useContext } from "react"
import BoxcarContext from "../contexts/BoxcarContext"
import LoaderModeContext from "../contexts/LoaderModeContext"

function BoxcarProvider ({children}) {
    const [boxcars, setBoxcars] = useState([])

    const { setIsLoading } = useContext(LoaderModeContext)


    useEffect(() => {
        fetchBoxcars()
    },[])

    useEffect(() => {
        fetchBoxcars()
    },[boxcars])
    

    async function fetchBoxcars() {
        try {
         const r = await fetch(`http://localhost:3000/boxcars`)
         if(!r.ok) {
            throw new Error("💥 Error");
         }
         const data = await r.json()
         setBoxcars(data)
         setIsLoading(false)
        }catch (error) {console.error("❌ Caught error:", error);
        setIsLoading(false)
        }
    }

    async function handleFavorite(obj) {
        const updatedObj = {
            ...obj,
            favorite: !obj.favorite
        }
        try {
            const r = await fetch(`http://localhost:3000/boxcars/${obj.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedObj)
            }) 
            if(!r.ok) {
                throw new Error("💥 Error");
             }
             const data = r.json()
             const updated = boxcars.map(b => b.id === data.id ? data : b)
             setBoxcars(updated)
        } catch (error) {console.error("❌ Caught error:", error);}
    }

    async function handleDelete(id) {
        const updated = [...boxcars].filter(b => b.id !== id)
        try {
            const r = await fetch(`http://localhost:3000/boxcars/${id}`, {
                method: 'DELETE'
            }) 
            if(!r.ok) {
                throw new Error("💥 Error");
             }
            setBoxcars(updated)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    return (
    <>
    <BoxcarContext.Provider
        value={{ boxcars, handleFavorite, handleDelete }}
    >
        {children}
    </BoxcarContext.Provider>
    </>
    )}
    
    export default BoxcarProvider
    