import {Button, Col, Container, Row} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Accounts = () => {
    return (
        <div>
            <h3 className="mb-5 text-center">Social media accounts</h3>
            <Container fluid>
                <Row>
                    <Col className="d-flex flex-column align-items-center">
                            <p>Facebook</p>
                            <FaFacebook fontSize={50} />
                            <Button variant="danger" className="mt-3 px-5">Add</Button>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                        <p>Instagram</p>
                        <FaInstagram fontSize={50} />
                        <Button variant="danger" className="mt-3 px-5">Add</Button>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                        <p>Twitter</p>
                        <FaTwitter fontSize={50} />
                        <Button variant="danger" className="mt-3 px-5">Add</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Accounts