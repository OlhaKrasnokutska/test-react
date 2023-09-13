import React from "react";
import { Nav, NavLink, NavMenu } 
from "./NavbarElements";
const Navbar = () => {
return (
<>
<Nav>
<NavMenu>
<NavLink to="/" activeStyle>
Olha Krasnokutska
</NavLink>
<NavLink to="/certificates" activeStyle>
Certificates
</NavLink>
<NavLink to="/contacts" activeStyle>
Contact Me
</NavLink>
</NavMenu>
</Nav>
</>
);
};
export default Navbar;