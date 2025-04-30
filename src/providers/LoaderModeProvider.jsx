import { useState } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"


function LoaderModeProvider ({children}) {

    const [ isLoading, setIsLoading ] = useState(true)

return (
<>
<LoaderModeContext.Provider
value={{ isLoading, setIsLoading }}>
    {children}
</LoaderModeContext.Provider>
</>
)}

export default LoaderModeProvider
