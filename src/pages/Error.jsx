import { useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

function Error() {

    const error = useRouteError()

return (
<>
<NavBar/>
<h1>Error!</h1>
<h3>{error.status}</h3> 
<h4>{error.message}</h4>
<h5>{error.statusText} </h5>
</>
)}

export default Error
