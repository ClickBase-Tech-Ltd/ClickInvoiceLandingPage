import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { getImagePath } from "../../../lib/utils";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Registerdialog from "./Registerdialog";
import Signdialog from "./Signdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Features", href: "/features", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (current: boolean) =>
    `px-2 py-1 text-sm font-medium rounded transition ${
      current
        ? "text-blue-700 bg-blue-100"
        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
    }`;

  const buttonClass =
    "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition";

  return (
    <Disclosure as="nav" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                className="h-10 w-auto"
                src={getImagePath("/assets/logo/logo.svg")}
                alt="ClickInvoice logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={linkClass(item.current)}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-2">
            {/* Sign In Button */}
            <Signdialog
              className={buttonClass} // Pass buttonClass into the dialog for styling
            />

            {/* Sign Up Button */}
            <Registerdialog
              className={buttonClass} // Pass buttonClass into the dialog for styling
            />

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-1 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition"
              >
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata />
      </Drawer>
    </Disclosure>
  );
};

export default Navbar;
