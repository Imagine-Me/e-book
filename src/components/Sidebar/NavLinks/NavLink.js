import { Link } from 'react-router-dom'

export default function NavLink(props) {
    return <div>
        <Link to={`/${props.index}`} >{props.children}</Link>
    </div>
}