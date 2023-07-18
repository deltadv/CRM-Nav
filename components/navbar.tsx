"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/ptdi.png";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-[#0F0D73] sticky top-0 z-[999] md:px-16 px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2" aria-label="Global">
        <div className="flex flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CRM</span>
            <Image
              className="h-auto w-full"
              src={logo.src}
              alt=""
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/#" className="nav-link" onClick={toggleDropdown}>
            Customer
          </a>
          {dropdownOpen && (
            <div className="absolute bg-white py-2 px-4 mt-1 rounded-lg shadow-lg">
              <a href="/#" className="dropdown-link">
                Dropdown Item 1
              </a>
              <a href="/#" className="dropdown-link">
                Dropdown Item 2
              </a>
              <a href="/#" className="dropdown-link">
                Dropdown Item 3
              </a>
            </div>
          )}
          <a href="/#" className="nav-link">Aircraft</a>
          <a href="/#" className="nav-link">Services</a>
          <a href="/#" className="nav-link">Scheduled Maintenance Level</a>
          <a href="/#" className="nav-link">Certificates</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="button">Log in</button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CRM</span>
              <Image
                className="h-auto w-full"
                src={logo.src}
                alt=""
                width={40}
                height={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 px-5">
                <a
                  href="/#"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Customer
                </a>
                <a
                  href="/#"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Aircraft
                </a>
                <a
                  href="/#"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Services
                </a>
                <a
                  href="/#"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Scheduled Maintenance Level
                </a>
                <a
                  href="/#"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Certificates
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

