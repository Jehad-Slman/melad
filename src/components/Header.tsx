import Link from "next/link";

import classes from "./header.module.css";

export default function Header() {
    return(
        <header className={classes.header} id="header">
            <h1>MELAD ALHAEK</h1>
            <ul>
                <li><Link href="#header">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#contact">Contact Me</Link></li>
            </ul>
        </header>
    )
}