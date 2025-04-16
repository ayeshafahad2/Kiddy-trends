"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white text-brown-700 px-8 md:px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <Image src="/kids.png" alt="partner" width={40} height={40} />
            <h1 className="text-xl md:text-2xl font-serif">KIDDY TRENDS</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-700 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links & Actions Section for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Links Section */}
            <div className="flex space-x-8 md:space-x-8 text-lg">
              <Link href="/" className="hover:text-brown-900 hover:scale-105">
                Home
              </Link>
              <Link
                href="/aboutus"
                className="hover:text-brown-900 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/accessories"
                className="hover:text-brown-900 hover:scale-105"
              >
                Accessories
              </Link>
              <Link
                href="/collection"
                className="hover:text-brown-900 hover:scale-105"
              >
                Collections
              </Link>
            </div>

            {/* Actions: Search, Login, Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/login" className="hover:text-brown-900 hover:scale-105">
                <Image src="/login.png" alt="login" width={30} height={30} />
              </Link>
              <Link href="/cart" className="hover:text-brown-900 hover:scale-105">
                <Image src="/cart.png" alt="cart" width={30} height={30} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Shows when isOpen is true */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block hover:text-brown-900 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="block hover:text-brown-900 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/accessories"
              className="block hover:text-brown-900 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Accessories
            </Link>
            <Link
              href="/collection"
              className="block hover:text-brown-900 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
