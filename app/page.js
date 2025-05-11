"use client"
import Link from 'next/link';
import React from 'react';
import Shorten from './components/Shorten';

const ShortifyLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Shorten Your Links, Instantly.
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-10">
            Turn your long, messy URLs into clean, shareable links — beautifully and instantly.
          </p>
          <Link
            href="#shorten"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:scale-105 hover:brightness-110 px-8 py-3 rounded-full font-semibold text-white shadow-xl transition-all duration-300"
          >
            🚀 Get Started
          </Link>
        </div>
      </section>

      {/* Shorten Component Section */}
      <Shorten />
    </div>
  );
};

export default ShortifyLanding;
