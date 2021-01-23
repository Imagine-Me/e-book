import { connect } from "react-redux"
import parse from 'html-react-parser'

import classes from './View.module.css'

import { BiEdit } from 'react-icons/bi'
import { Link } from "react-router-dom"


const View = ({ data, id }) => {
    return data ? <div className={classes.Padding}>
        <h2 className="text-center">
            {data.title}
            <Link to={`/edit/${id}`} >
                <BiEdit className="ml-2" />
            </Link>
        </h2>
        <div className="mt-3">
            {parse(data.text)}
        </div>
        <Link to="/create">Create new</Link>
    </div> : ''
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const data = state.data[id]
    return { data, id }
}


export default connect(mapStateToProps)(View)