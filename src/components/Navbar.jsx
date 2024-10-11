import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Experience", href: "/experience", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Live Services", href: "/live-demo", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto p-4 px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {/* Centered navigation links */}
          <div className="hidden sm:block">
            <div className="flex space-x-4 justify-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={
                    location.pathname === item.href ? "page" : undefined
                  }
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-lg font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button on the right */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
              className={classNames(
                location.pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-black hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
