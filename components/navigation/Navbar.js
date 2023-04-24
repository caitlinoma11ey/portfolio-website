import React from "react";
import Link from "next/link";

const navigationLinks = [
    { key: 0, label: "Home", location: "/index" },
    { key: 1, label: "About", location: "/about" },
    { key: 2, label: "Projects", location: "/" },
]

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <span>&lt;Caitlin O&apos;Malley /&gt;</span>
            </div>
            <ul>
                {navigationLinks.map((link) => (
                    <li key={link.key} >
                        <Link href={link.location}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;