import { useState } from 'react'

import { Form, Button } from "react-bootstrap"

import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';

import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { saveBook, updateBook } from '../../redux/actions'

import { convertToHTML, convertFromHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Edit = ({ saveBook, updateBook, title, text, isUpdate, id, total }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromHTML(text)))
    const [pageTitle, setPageTitle] = useState(title)

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        const eBook = {}
        eBook.title = pageTitle
        eBook.text = convertToHTML(editorState.getCurrentContent())
        if (isUpdate) {
            eBook.id = id
            updateBook(eBook)
            history.push(id)
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
            <div className="editor-wrapped">
                <Editor
                    editorStyle={{ height: '240px', padding: '0 15px' }}
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
            </div>
            <Button variant="primary" type="submit">Submit</Button>
        </form>
    </div>
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