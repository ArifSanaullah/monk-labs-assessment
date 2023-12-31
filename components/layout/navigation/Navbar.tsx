"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartBarIcon,
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-gray-40 block sticky top-0 bg-opacity-60 backdrop-filter backdrop-blur-lg border-b border-gray-200 !z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex flex-1 gap-4 items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center pr-8">
                  <Link href={"/"} className="flex items-center gap-2">
                    <Image
                      className="h-6 w-auto"
                      src={logo}
                      alt="Fit Grocer"
                      width={24}
                      height={24}
                    />

                    <h1 className="text-primary font-bold">Fit Grocer</h1>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-4 sm:gap-6">
                  <Link
                    href="/"
                    className={classNames(
                      "text-base flex items-center gap-2",
                      pathname === "/"
                        ? "text-primary hover:text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <HomeIcon className="w-5 h-5" />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/favourites"
                    className={classNames(
                      "text-base flex items-center gap-2",
                      pathname === "/favourites"
                        ? "text-primary hover:text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <HeartIcon className="w-5 h-5" />
                    <span>Favourites</span>
                  </Link>
                  <Link
                    href="/bucket"
                    className={classNames(
                      "text-base flex items-center gap-2",
                      pathname === "/bucket"
                        ? "text-primary hover:text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <ShoppingBagIcon className="w-5 h-5" />
                    <span>My Bucket</span>
                  </Link>
                  <Link
                    href="/insights"
                    className={classNames(
                      "text-base flex items-center gap-2",
                      pathname === "/insights"
                        ? "text-primary hover:text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <ChartBarIcon className="w-5 h-5" />
                    <span>Insights</span>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vh"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/coming-soon"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/coming-soon"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/coming-soon"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-primary", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as={Link}
                className={classNames(
                  pathname === "/"
                    ? "block border-l-4 border-primary bg-primary/5 py-2 pl-3 pr-4 text-base font-medium text-primary"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
                href="/"
              >
                <span
                  className={classNames(
                    "text-base flex items-center gap-2",
                    pathname === "/"
                      ? "text-primary hover:text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  <HomeIcon className="w-5 h-5" />
                  <span>Home</span>
                </span>
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                className={classNames(
                  pathname === "/favourites"
                    ? "block border-l-4 border-primary bg-primary/5 py-2 pl-3 pr-4 text-base font-medium text-primary"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
                href="/favourites"
              >
                <span
                  className={classNames(
                    "text-base flex items-center gap-2",
                    pathname === "/favourites"
                      ? "text-primary hover:text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  <HeartIcon className="w-5 h-5" />
                  <span>Favourites</span>
                </span>
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                className={classNames(
                  pathname === "/bucket"
                    ? "block border-l-4 border-primary bg-primary/5 py-2 pl-3 pr-4 text-base font-medium text-primary"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
                href="/bucket"
              >
                <span
                  className={classNames(
                    "text-base flex items-center gap-2",
                    pathname === "/bucket"
                      ? "text-primary hover:text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span>My Bucket</span>
                </span>
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                className={classNames(
                  pathname === "/insights"
                    ? "block border-l-4 border-primary bg-primary/5 py-2 pl-3 pr-4 text-base font-medium text-primary"
                    : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
                href="/insights"
              >
                <span
                  className={classNames(
                    "text-base flex items-center gap-2",
                    pathname === "/insights"
                      ? "text-primary hover:text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  <ChartBarIcon className="w-5 h-5" />
                  <span>Insights</span>
                </span>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
