import { useContext } from "react"
import List from "../pages/List"
import Loader from "../components/Loader"
import LoaderModeContext from "../contexts/LoaderModeContext"

function Home() {

    const {isLoading} = useContext(LoaderModeContext)

return (
<>
{ isLoading ? <Loader /> :
<>
<List />

</>
}

</>
)}

export default Home
