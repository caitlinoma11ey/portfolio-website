import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.pageYOffset;

      if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  
  const navigationLinks = [
    { key: 0, label: "Home", location: "/" },
    { key: 1, label: "Work", location: "/#projects" },
    { key: 2, label: "About", location: "/#about" },
  ];

  return (
    <div className={`navbar ${show ? 'navbar--hidden' : ''}`}>
      <div className="navbar__logo">
        <span>&lt;Caitlin O&apos;Malley /&gt;</span>
      </div>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.location}
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
