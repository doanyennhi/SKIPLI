import Nav from "react-bootstrap/Nav";
import {Container, Navbar} from "react-bootstrap";
import { FaChartPie, FaUserCircle} from "react-icons/fa";

const Sidebar = ({setElement}) => {
    return (
        <div className="min-vh-100">
            <Navbar expand="lg" className="min-vh-100" sticky="top" bg="danger" data-bs-theme="dark">
                <Container className="flex-column p-0">
                    <Navbar.Brand className="mb-2 mx-0">Skipli Project</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav variant="underline" defaultActiveKey="posts" onSelect={selected => setElement(selected)}
                             className="d-flex flex-column w-100 mt-3 align-items-center">
                            <Nav.Link eventKey="posts" className="d-flex align-items-center"><FaChartPie className="me-2" />All Posts</Nav.Link>
                            <Nav.Link eventKey="accounts" className="d-flex align-items-center"><FaUserCircle className="me-2" />Accounts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar

