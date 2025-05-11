import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-gray-950 border-b border-gray-800 text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/url.png" alt="logo" width={40} height={40} className="rounded-md" />
          <span className="text-xl font-semibold tracking-wide">Shortify</span>
        </Link>

        <div className="space-x-6 text-sm sm:text-base font-medium">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <a href="#features" className="hover:text-purple-400 transition">Features</a>
          <a href="#shorten" className="hover:text-purple-400 transition">Shorten</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
