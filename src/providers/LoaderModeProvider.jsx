import { useState } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"


function LoaderModeProvider ({children}) {
    const [ inEditMode, setInEditMode ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)

return (
<>
<LoaderModeContext.Provider
value={{ inEditMode, setInEditMode, isLoading, setIsLoading }}>
    {children}
</LoaderModeContext.Provider>
</>
)}

export default LoaderModeProvider
