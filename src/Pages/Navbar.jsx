import React, { useState, useEffect } from "react";
import { Atom, Beaker, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to handle body overflow when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-fuchsia-600" />
            <span className="text-xl font-bold">MolecularMinds</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-fuchsia-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-fuchsia-600 transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/events"
              className="text-white hover:text-fuchsia-600 transition-colors"
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-fuchsia-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white hover:text-fuchsia-600"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-6 py-4 flex flex-col space-y-6">
          <div className="flex items-center space-x-2 border-b border-gray-700 pb-6">
            <Beaker className="h-6 w-6 text-fuchsia-600" />
            <span className="text-lg font-bold">MolecularMinds</span>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-fuchsia-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-fuchsia-600 transition-colors py-2"
            >
              About Us
            </Link>
            <a
              href="#"
              className="text-white hover:text-fuchsia-600 transition-colors py-2"
            >
              Events
            </a>
            <Link
              to="/contact"
              className="text-white hover:text-fuchsia-600 transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
