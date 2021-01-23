import Link from './Links/Link'

import { connect } from 'react-redux'
import style from './Sidebar.module.css'


const Sidebar = ({ links }) => {
    console.log(Array.isArray(links));
    return (<div className={style.Sidebar}>
        {links.map((link,index) => <Link key={index}>{link}</Link>)}
    </div>)
}

const mapStateToProps = state => {
    const links = state.data.map(value => value.title)
    return { links }
}

export default connect(mapStateToProps)(Sidebar)