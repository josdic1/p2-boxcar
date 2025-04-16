import { useRouteError } from "react-router-dom"

function Error() {

    const error = useRouteError()

return (
<>
<h1>Error!</h1>
<h3>{error.status} || {error.message} || {error.statusText} </h3>
</>
)}

export default Error
