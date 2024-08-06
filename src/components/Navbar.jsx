import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/Accordion";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return(
        <div className="flex justify-between items-center p-4 border-b-2">
            <Link to="/" className="text-4xl">Na Blog</Link>
            <Accordion type="single" collapsible>
            <AccordionItem value="menu">
                <AccordionTrigger onClick={() => setIsActive(!isActive)}>Menu</AccordionTrigger>
                <AccordionContent active={isActive}>
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
    );
};
