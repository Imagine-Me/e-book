import { NavLink } from 'react-router-dom'
import classes from './Link.module.css'

export default function Link(props) {
    return <div className={classes.Link}>
        <NavLink activeClassName={classes.ActiveLink}  to={`/${props.index}`} >{props.children}</NavLink>
    </div>
}