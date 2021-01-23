import { useState } from 'react'

import { Form, Button } from "react-bootstrap"

import { ContentState, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';

import { connect } from 'react-redux'

import { saveBook, updateBook } from '../../redux/actions'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML, convertFromHTML } from 'draft-convert';

const Edit = ({ saveBook, updateBook, title, text, isUpdate, id }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromHTML(text)))
    const [pageTitle, setPageTitle] = useState(title)

    const onSubmitForm = (event) => {
        event.preventDefault()
        const eBook = {}
        eBook.title = pageTitle
        eBook.text = convertToHTML(editorState.getCurrentContent())
        if (isUpdate) {
            eBook.id = id
            updateBook(eBook)
        } else {
            saveBook(eBook)
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
        content: '',
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

    return data
}

export default connect(mapStateToProps, { saveBook, updateBook })(Edit)