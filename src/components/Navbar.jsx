import React from "react"
import 'flowbite'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="fixed bg-white lg:bg-[hsla(0,0%,100%,.6)]  w-full z-50 top-0 start-0 backdrop-blur-sm backdrop-filter">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/LOGO KKN 115.png" className="h-8" alt=" Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alassumur</span>
        </NavLink>
        <div className="flex md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Beranda</NavLink>
            </li>
            <li>
                <NavLink to="/tentang" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang</NavLink>
            </li>
            <li>
                <NavLink to="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</NavLink>
            </li>
            <li>
                <a href="mailto:kknalassumur115@gmail.com" className="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                    Kontak Kami
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>

    )
}