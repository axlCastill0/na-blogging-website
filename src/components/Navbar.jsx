import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="flex justify-between items-center p-4 border-b-2">
            <Link to="/" className="text-4xl">Na Blog</Link>
            <ul className="flex gap-4">                                   
                <li>
                    <Link to="/about">About Me!</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link> 
                </li>               
            </ul>
        </div>
    )
}
