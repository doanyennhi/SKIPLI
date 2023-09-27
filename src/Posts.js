import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
const Posts = () => {
    return (
        <div>
            <header className="w-100 d-flex justify-content-between">
                <div className="w-50 d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search..."
                    />
                    <Button variant="danger"
                            className="d-flex align-items-center justify-content-center"><FaSearch/></Button>
                    <Button variant="outline-secondary" className="ms-3">Filter</Button>
                </div>
                <Button variant="danger">Create new post</Button>
            </header>
        </div>

    )
}

export default Posts