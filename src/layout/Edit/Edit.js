import { useState } from 'react'

import { Form, Button } from "react-bootstrap"

import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';

const Edit = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [pageTitle, setPageTitle] = useState('')

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(convertToHTML(editorState.getCurrentContent()));
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

export default Edit