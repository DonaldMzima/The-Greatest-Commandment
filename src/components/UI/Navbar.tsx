import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/">
          <div className="text-xl font-bold">
            The
            <br />
            Greatest
            <br />
            Commandment
          </div>
        </a>
        <div className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="about" className="hover:underline">
            About
          </a>
          <a href="contacts" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
