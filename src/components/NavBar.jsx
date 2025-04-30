import { NavLink } from "react-router-dom"

function NavBar() {

return (
<>
<nav>
    <NavLink to='/'> / </NavLink>
    <NavLink to='home'> Home </NavLink>
    <NavLink to='spin'> ⟳ </NavLink>
</nav>
</>
)}

export default NavBar
