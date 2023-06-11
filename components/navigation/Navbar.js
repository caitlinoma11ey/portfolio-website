import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const navigationLinks = [
    { key: 0, label: "Home", location: "/" },
    { key: 1, label: "Work", location: "/#projects" },
    { key: 2, label: "About", location: "/about" },
  ];

  const handleClick = (location) => {
    if (!location.includes("#")) {
      router.push(location);
    }
    else {
      if (router.pathname != "/") {
        router.push("/");
        setTimeout(() => {
          scrollToProjects();
        }, 50);
      }
        scrollToProjects();
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
    }
  };
  
   const router = useRouter();
  
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <span>&lt;Caitlin O&apos;Malley /&gt;</span>
        </div>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.key}>
              <a href={link.location}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.location);
               }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Navbar;