import { Form } from "react-bootstrap"

const Edit = () => {
    return <div className="p-3">
        <form>
            <Form.Label>Page Title</Form.Label>
            <Form.Control type="text" placeholder="Page Title" />
        </form>
    </div>
}

export default Edit