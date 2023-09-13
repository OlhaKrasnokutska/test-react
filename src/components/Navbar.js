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
<NavLink to="/contact" activeStyle>
Contact Us
</NavLink>
<NavLink to="/blogs" activeStyle>
Blogs
</NavLink>
<NavLink to="/sign-up" activeStyle>
Sign Up
</NavLink>
</NavMenu>
</Nav>
</>
);
};
export default Navbar;