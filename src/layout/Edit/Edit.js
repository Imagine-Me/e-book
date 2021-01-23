import { useState } from 'react'

import { Form } from "react-bootstrap"

import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Edit = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())


    return <div className="p-3">
        <form>
            <Form.Label>Page Title</Form.Label>
            <Form.Control type="text" placeholder="Page Title" />
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
        </form>
    </div>
}

export default Edit