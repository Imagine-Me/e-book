import { Link } from "react-router-dom";
import classes from './FooterAddBook.module.css'
import { AiOutlinePlus } from 'react-icons/ai'

export default function FooterAddBook() {
    return <div>
        <Link to="/create" className={classes.Button}>
            Add New Page
            <AiOutlinePlus className="ml-2" />
        </Link>
    </div>
}