import Sidebar from "./components/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import Posts from "./Posts";
import {useState} from "react";
import Accounts from "./Accounts";

const DashboardPage = () => {
    const [element, setElement] = useState("posts")

    return (
        <div>
            <Container fluid>
                <Row className="px-0">
                    <Col xs={2} className="p-0 m-0">
                        <Sidebar setElement={setElement} />
                    </Col>
                    <Col className="p-0 bg-body-tertiary pt-5 px-4">
                        {element === "posts"
                            ? <Posts />
                            : <Accounts />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardPage