import { Link } from "react-router-dom"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/Accordion";

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
            <Accordion type="single" collapsible>
            <AccordionItem value="menu">
                <AccordionTrigger>Menu</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}
