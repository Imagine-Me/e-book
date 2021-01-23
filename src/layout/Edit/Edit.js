import { useState } from 'react'

import { Form, Button } from "react-bootstrap"
import { connect } from 'react-redux'

import { useHistory, Link } from 'react-router-dom'
import { saveBook, updateBook } from '../../redux/actions'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const Edit = ({ saveBook, updateBook, title, text, isUpdate, id, total }) => {
    const [richContent, setRichContent] = useState(text)
    const [pageTitle, setPageTitle] = useState(title)

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        const eBook = {}
        eBook.title = pageTitle
        eBook.text = richContent
        if (isUpdate) {
            eBook.id = id
            updateBook(eBook)
            history.push(`/${id}`)
        } else {
            saveBook(eBook)
            history.push(`/${total}`)
        }
    }


    return <div className="p-3">
        <form onSubmit={onSubmitForm}>
            <div>
            </div>
            <Form.Label>Page Title</Form.Label>
            <Form.Control type="text" placeholder="Page Title" onChange={(event) => setPageTitle(event.target.value)} value={pageTitle} required />
            <div className="mt-3">
                <ReactQuill
                    theme="snow"
                    value={richContent}
                    onChange={setRichContent}
                />
            </div>
            <div className="mt-3">
                <Link className="btn btn-primary float-right text-uppercase" to={`/${id ?? total > 0 ? '0' : ''}`}>Back to book</Link>
                <Button className="float-right mr-2 text-uppercase" variant="info" type="submit">Save Page</Button>
            </div>
        </form>
    </div >
}


const mapStateToProps = (state, props) => {
    let data = {
        title: '',
        text: '',
        isUpdate: false
    }
    if (/edit/.test(props.location.pathname)) {
        const id = props.match.params.id
        if (id) {
            data = state.data[id]
            data.isUpdate = true
            data.id = id
        }
    }
    const total = state.data.length
    return { ...data, total }
}

export default connect(mapStateToProps, { saveBook, updateBook })(Edit)