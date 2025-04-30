import { NavLink } from "react-router-dom"

function NavBar() {

return (
<>
<nav>

    <NavLink to='home'> Home </NavLink>
    <NavLink to='new'> Add New </NavLink>
    <NavLink to='spin'> ⟳ </NavLink>
</nav>
</>
)}

export default NavBar
