import { useContext } from "react"

import Form from "../pages/Form"
import List from "../pages/List"
import Loader from "../components/Loader"
import LoaderModeContext from "../contexts/LoaderModeContext"

function Home() {

    const {isLoading} = useContext(LoaderModeContext)

return (
<>
{ isLoading ? <Loader /> :
<>
<Form />
<List />

</>
}

</>
)}

export default Home
