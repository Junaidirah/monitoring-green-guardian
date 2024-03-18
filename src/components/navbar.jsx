import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Data Monitoring", link: "/data-monitoring" },
    { name: "Profile", link: "/profile" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 ${
        isScrolled ? "bg-black" : "bg-gray-200"
      } fixed top-0 left-0 w-full transition duration-300 z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold mr-4 text-green-500">
            GreenGuardian
          </span>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`text-green-500 md:text-gray-700 hover:bg-green-500 hover:border-gradient-primary px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  isScrolled && "hover:bg-gray-900"
                }`}
                style={{ color: isScrolled ? "#58A399" : "inherit" }} // Menentukan warna teks sebelum dihover
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-green-500 md:text-gray-700 hover:bg-green-500 hover:border-gradient-primary px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                isScrolled && "hover:bg-gray-900"
              }`}
              style={{ color: isScrolled ? "#58A399" : "inherit" }} // Menentukan warna teks sebelum dihover
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-green-500 md:text-gray-700 hover:bg-green-500 hover:border-gradient-primary px-4 py-2 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                style={{ color: isScrolled ? "#58A399" : "inherit" }} // Menentukan warna teks sebelum dihover
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
