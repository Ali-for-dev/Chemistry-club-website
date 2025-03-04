import React, { useState, useEffect } from "react";
import { ChevronDown, Beaker, FlaskConical, Atom, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const LandingPage = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Explore the <span className="text-green-400">Wonders</span> of
              Chemistry
            </h1>
            <p className="text-xl text-gray-300">
              Join our community of passionate scientists and enthusiasts as we
              discover the building blocks of our universe.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-colors text-lg">
                Join Our Club
              </button>
              <button className="border border-white hover:border-green-400 hover:text-green-400 px-6 py-3 rounded-full font-medium transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto flex justify-center">
            <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <Atom className="w-48 h-48 md:w-64 md:h-64 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Join Our Chemistry Club?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <Beaker className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Hands-on Experiments
            </h3>
            <p className="text-gray-300 text-center">
              Get your hands dirty with exciting laboratory experiments guided
              by experienced mentors.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <FlaskConical className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Research Opportunities
            </h3>
            <p className="text-gray-300 text-center">
              Collaborate on real research projects and build your scientific
              portfolio.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                <Atom className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Network & Community
            </h3>
            <p className="text-gray-300 text-center">
              Connect with like-minded peers and professionals in the chemistry
              field.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-800 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to explore the molecular world?
              </h2>
              <p className="text-xl text-gray-300">
                Join our next meeting and discover what chemistry can do for
                you.
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:items-end">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium transition-colors text-lg w-full md:w-auto">
                Register Now
              </button>
              <p className="text-gray-300 text-center md:text-right">
                Next meeting: Every Friday at 5 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Beaker className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold">MolecularMinds</span>
              </div>
              <p className="text-gray-400">
                Exploring the world of chemistry together since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/"
                    className="hover:text-green-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-green-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="events"
                    className="hover:text-green-400 transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-green-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest events and discoveries.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/molecularminds.club/"
                  target="_blank"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevShroom. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  );
};

export default LandingPage;
