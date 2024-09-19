import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Define menu items as an array of objects with name and path
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'All Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white border-b border-blue-300 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="w-44 cursor-pointer">
          <Image src="/logo.png" alt="Logo" width={176} height={50} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-blue-600 font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className={`hover:text-blue-800 transition duration-200 ${router.pathname === item.path ? 'text-blue-900 font-bold border-b-2 border-blue-900' : ''}`}>
                <span onClick={() => router.push(item.path)} className="cursor-pointer">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Create Account Button */}
        <div className="hidden md:flex">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition duration-300">
            Create Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-blue-300 py-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className={`hover:text-blue-800 transition duration-200 ${router.pathname === item.path ? 'text-blue-900 font-bold border-b-2 border-blue-900' : ''}`}>
                <span onClick={() => router.push(item.path)} className="cursor-pointer">{item.name}</span>
              </li>
            ))}
            <li>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition duration-300">
                Create Account
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
