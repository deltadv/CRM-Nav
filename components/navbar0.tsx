"use client";
import React from "react";
import { useState } from "react";
import logo from "@/public/ptdi.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAircraft, setDropdownAircraft] = useState(false);
  const [dropdownCustomer, setDropdownCustomer] = useState(false);
  const [sidebarMenu, setSidebarMenu] = useState(false);

  const CustomerDropdown = () => {
    setDropdownCustomer(!dropdownCustomer);
    setDropdownAircraft(false);
    setDropdownOpen(false);
  };

  const AircraftDropdown = () => {
    setDropdownAircraft(!dropdownAircraft);
    setDropdownCustomer(false);
    setDropdownOpen(false);
  };

  const ServiceDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownAircraft(false);
    setDropdownCustomer(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
  };
  
  const toggleSidebarMenu = () => {
    setSidebarMenu(!sidebarMenu);
  };

  return (
    <div>
    <nav className="border-gray-600 bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center">
          <img
            src={logo.src}
            className="h-8 mr-3"
            alt="PT. Dirgantara Indonesia Logo"
          />
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={` font-medium justify-center ${
            mobileMenuOpen ? "flex" : "hidden"
          } w-full lg:flex lg:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:text-left sm:text-left p-4 md:p-5 lg:p-0 md:mt-5 lg:mt-0 mt-4 md:flex-col lg:flex-row md:space-y-5 lg:space-y-0 lg:space-x-8 bg-gray-900 lg:bg-gray-900 ">
            <li>
            <button onMouseOver={CustomerDropdown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-white md:hover:text-blue-500 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Customer <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            {dropdownCustomer && (
            <div onMouseLeave={CustomerDropdown} id="dropdownNavbar" className="absolute z-10 font-normal shadow w-44 dark:bg-gray-700 dark:divide-gray-600 bg-gray-800 border-t-4 mt-5">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-white dark:hover:text-white text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-white dark:hover:text-white text-white">Settings</a>
                  </li>
                </ul>
            </div>
            )}
            </li>
            <li>
            <button onMouseOver={AircraftDropdown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-white md:hover:text-blue-500 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Aircraft <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            {dropdownAircraft && (
            <div onMouseLeave={AircraftDropdown} id="dropdownNavbar" className="absolute z-10 font-normal shadow w-44 dark:bg-gray-700 dark:divide-gray-600 bg-gray-800 border-t-4 mt-5">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-white dark:hover:text-white text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-white dark:hover:text-white text-white">Settings</a>
                  </li>
                </ul>
            </div>
            )}
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
                onMouseOver={ServiceDropdown}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
              >
                Scheduled Maintenance Level
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
              >
                Certificates
              </a>
            </li>
            <li>
            <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
                onClick={toggleSidebarMenu}
              >
                <svg className="w-6 h-6 text-white dark:text-white pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
</svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {dropdownOpen && (
        <div
          onMouseLeave={ServiceDropdown}
          id="mega-menu-full-dropdown"
          className="mt-1 shadow-sm md:bg-gray-800 border-t-4"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>

{/* <!-- drawer component --> */}
{sidebarMenu && (
<div id="drawer-navigation" className="fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button onClick={toggleSidebarMenu} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div onMouseUp={toggleSidebarMenu} className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Gallery</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
            </a>
         </li>
      </ul>
   </div>
</div>
)}
</div>
  );
}
