import { connect } from "react-redux"
import parse from 'html-react-parser'

import classes from './View.module.css'

import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, useHistory } from "react-router-dom"
import FooterAddBook from '../../components/FooterAddBook/FooterAddBook'

import { deleteBook } from '../../redux/actions'


const View = ({ data, id, length, deleteBook }) => {

    const history = useHistory()

    const deleteHandler = () => {
        deleteBook({ id })
        if (length > 1) {
            history.push(`/0`)
        } else {
            history.push('/')
        }

    }

    return data ? <div className={classes.Padding}>
        <h2 className="text-center">
            {data.title}
            <Link to={`/${id}/edit`} className="text-dark">
                <BiEdit className={["ml-3", classes.EditHover].join(" ")} size=".7em" />
            </Link>
            <AiOutlineDelete onClick={deleteHandler} className={["ml-2", classes.DeleteHover].join(" ")} size=".7em" />
        </h2>
        <div className="mt-3">
            {parse(data.text)}
        </div>
        <FooterAddBook />
    </div> : ''
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const data = state.data[id]
    const length = state.data.length
    return { data, id, length }
}


export default connect(mapStateToProps, { deleteBook })(View)