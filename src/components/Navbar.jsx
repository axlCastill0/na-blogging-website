import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="flex justify-between items-center bg-red-500 p-4">
            <Link to="/" className="text-4xl">Na Blog</Link>
            <ul className="flex gap-2">                   
                <li>
                    <Link to="/about">About Me!</Link>
                </li>
            </ul>
        </div>
    )
}
