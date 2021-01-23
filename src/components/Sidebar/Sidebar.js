import NavLink from './NavLinks/NavLink'

import { connect } from 'react-redux'
import style from './Sidebar.module.css'


const Sidebar = ({ links }) => {
    return (<div className={style.Sidebar}>
        {links.map((link, index) => <NavLink key={index} index={index}>{link}</NavLink>)}
    </div>)
}

const mapStateToProps = state => {
    const links = state.data.map(value => value.title)
    return { links }
}

export default connect(mapStateToProps)(Sidebar)