import { Link } from 'react-router-dom'

export default function InitialView() {
    return <div className="mt-5 text-center">
        <h1>There are no pages added</h1>
        <Link to="/create" className="btn btn-primary mt-5">Create new</Link>
    </div>
}