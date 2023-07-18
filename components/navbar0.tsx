"use client";
import React from "react";
import { useState } from "react";
import logo from "@/public/ptdi.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAircraft, setDropdownAircraft] = useState(false);
  const [dropdownCustomer, setDropdownCustomer] = useState(false);

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

  return (
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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            {dropdownCustomer && (
            <div id="dropdownNavbar" className="absolute z-10 font-normal shadow w-44 dark:bg-gray-700 dark:divide-gray-600 bg-gray-800 border-t-4 mt-5">
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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            {dropdownAircraft && (
            <div id="dropdownNavbar" className="absolute z-10 font-normal shadow w-44 dark:bg-gray-700 dark:divide-gray-600 bg-gray-800 border-t-4 mt-5">
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
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
              >
                -
              </a>
            </li>
          </ul>
        </div>
      </div>
      {dropdownOpen && (
        <div
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
  );
}
