import { connect } from "react-redux"
import parse from 'html-react-parser'

import classes from './View.module.css'

import { BiEdit } from 'react-icons/bi'


const View = ({ data }) => {
    return <div className={classes.Padding}>
        <h2 className="text-center">
            {data.title}
            <BiEdit className="ml-2" />
        </h2>
        <div className="mt-3">
            {parse(data.text)}
        </div>
    </div>
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const data = state.data[id]
    return { data }
}


export default connect(mapStateToProps)(View)