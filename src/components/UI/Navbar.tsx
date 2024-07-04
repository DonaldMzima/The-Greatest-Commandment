import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>(""); // State to track active link

  useEffect(() => {
    // Function to determine active link based on current URL pathname
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      setActiveLink("home");
    } else if (currentPath === "/about") {
      setActiveLink("about");
    } else if (currentPath === "/contacts") {
      setActiveLink("contacts");
    }
  }, []); // Empty dependency array to run only once on mount

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set the active link on click
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo on the left */}
        <a href="/" className="flex items-center space-x-2">
          {/* SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="w-12 h-12 text-gray-300"
          >
            {/* Bible */}
            <path fill="#4a5568" d="M7 3h10v18H7V3zm2 2v14h6V5H9z" />
            <path fill="#4a5568" d="M8.5 16.25V17h3v-.75l-.5-.25-.5-.25z" />
            <path
              fill="#a0aec0"
              d="M13 5v2.33c-1.33.21-3 1.34-3 2.67s1.67 2.46 3 2.67V19H7V5h6z"
            />
            {/* Praying Hand */}
            <path
              fill="#4a5568"
              d="M18.62 11.88l-1.66-.61c.11-.2.21-.4.3-.61l1.66.6c-.08.23-.18.44-.3.62zM17.72 9.84l1.65.61c-.09.2-.18.41-.27.62l-1.65-.61c.09-.2.18-.41.27-.62zM16.93 7.77l1.65.61c-.09.19-.18.41-.27.61l-1.65-.6c.09-.21.18-.42.27-.62zM15.34 5.9l1.65.6c-.1.21-.2.42-.3.62l-1.65-.61c.1-.21.2-.41.3-.61zM19.5 16.5c-1.06 0-2.05-.42-2.79-1.13L15 17.9c1.07.64 2.31 1.01 3.65 1.01 1.38 0 2.65-.39 3.73-1.06l-1.71-1.52c-.22.13-.47.21-.73.21z"
            />
          </svg>
          {/* Logo Text */}
          <div className="text-xl font-light text-gray-300 ml-2">
            The
            <br />
            Greatest
            <br />
            Commandment
          </div>
        </a>
        <div className="space-x-4">
          <a
            href="/"
            className={`text-gray-300 ${
              activeLink === "home" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="/about"
            className={`text-gray-300 ${
              activeLink === "about" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
          <a
            href="/contacts"
            className={`text-gray-300 ${
              activeLink === "contacts" ? "font-bold" : ""
            }`}
            onClick={() => handleLinkClick("contacts")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
