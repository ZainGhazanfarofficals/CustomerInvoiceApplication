import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Customer</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/Invoice">Invoice</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;