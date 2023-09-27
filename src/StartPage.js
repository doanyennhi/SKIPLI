import {Form, Alert, Button} from 'react-bootstrap';
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const StartPage = () => {
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [alertType, setAlertType] = useState("danger")

    const handleValidation = async () => {
        await axios.post("http://localhost:8080/api/v1/access-code/validate", {
            "access_code": code,
            "phone_num": phone
        })
            .then(res => {
                setShowMessage(true)
                if (res.data.success) {
                    setMessage("Your phone number is successfully validated!")
                    setAlertType("success")
                    localStorage.setItem("phoneNumber", phone);
                } else {
                    setMessage("The code you entered does not match. Please try again.")
                    setAlertType("danger")
                }
            })
            .catch(error => {
                console.error(error);
                setMessage("The code you entered does not match. Please try again.")
                setAlertType("danger")
            });
    }

    const handleSubmit = async () => {
        await axios.post("http://localhost:8080/api/v1/access-code/create", {
            phone_num: phone
        })
            .then(() => {
                setShowMessage(true)
                setMessage("We have sent you an access code via SMS.")
                setAlertType("success")
            })
            .catch(error => {
                console.error(error);
                setMessage("There was an error. Please try again.")
                setAlertType("danger")
            });
    }

    return (
        <div className="vh-100 vw-100 d-flex flex-column align-items-center justify-content-center">
            <header className="mb-4">
                <h1>Welcome to Skipli Project</h1>
            </header>

            <Alert variant={alertType} hidden={!showMessage}>
                {message}
            </Alert>

            <Form className="mb-4 d-flex flex-column justify-content-start">
                <Form.Group className="mb-4">
                    <Form.Label>Phone Number: </Form.Label>
                    <div className="d-flex">
                        <Form.Control className="me-3" type="tel" placeholder="E.g: +61123456789"
                                      pattern="/+[0-9]{11}" value={phone} onChange={e => setPhone(e.target.value)}/>
                        <Button className="w-50" variant="outline-danger" onClick={handleSubmit}>Get code</Button>
                    </div>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Access Code: </Form.Label>
                    <div className="d-flex">
                    <Form.Control className="me-3" type="text" placeholder="E.g: 123456"
                                  pattern="[0-9]{6}" value={code} onChange={e => setCode(e.target.value)} />
                    <Button className="w-50" variant="outline-danger" onClick={handleValidation}>Validate</Button>
                    </div>
                </Form.Group>
            </Form>

            <Link to="/dashboard"><Button variant="danger">Go to Dashboard</Button></Link>

        </div>
    );
}

export default StartPage