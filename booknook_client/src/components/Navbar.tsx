
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  FaBookOpen,
  FaSearch,
  FaUser,
  FaSignOutAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface User {
  name: string;
  email?: string;
  image?: string;
}

interface NavbarProps {
  user?: User | null;
  onLogout?: () => void;
}

export default function Navbar({
  user = null,
  onLogout,
}: NavbarProps) {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
  ];

  const privateLinks = [
    { name: "Add Book", href: "/add-book" },
    { name: "My Books", href: "/my-books" },
    { name: "My Borrows", href: "/my-borrows" },
  ];

  const allLinks = user
    ? [...navLinks, ...privateLinks]
    : navLinks;

  // Search Function
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchValue = search.trim();

    if (!searchValue) return;

    router.push(`/books?search=${encodeURIComponent(searchValue)}`);

    setMobileMenu(false);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">

      <nav className="mx-auto flex min-h-[76px] max-w-[1450px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:gap-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <FaBookOpen className="text-3xl text-green-700 md:text-4xl" />

          <span className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
            Book<span className="text-green-700">Nook</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap border-b-2 py-2 text-sm font-semibold transition ${
                pathname === link.href
                  ? "border-green-700 text-green-700"
                  : "border-transparent text-slate-700 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden h-11 min-w-[180px] max-w-[260px] flex-1 items-center rounded-full border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-green-600 focus-within:bg-white focus-within:shadow-md md:flex"
        >
          <FaSearch className="shrink-0 text-sm text-green-700" />

          <input
            type="search"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 min-w-0 flex-1 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />

          <button
            type="submit"
            aria-label="Search books"
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white transition hover:bg-green-800"
          >
            <FaSearch className="text-xs" />
          </button>
        </form>

        {/* Desktop Authentication */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">

          {user ? (
            <div className="relative">

              <button
                type="button"
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 rounded-full p-1 transition hover:bg-green-50"
                aria-label="User profile"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10 rounded-full border-2 border-green-100 object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <FaUser />
                  </div>
                )}

                <FaChevronDown className="text-xs text-gray-500" />
              </button>

              {dropdown && (
                <div className="absolute right-0 top-14 z-50 w-52 rounded-xl border border-gray-100 bg-white p-3 shadow-xl">

                  <div className="border-b border-gray-100 pb-3">
                    <p className="text-sm font-bold text-slate-800">
                      {user.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setDropdown(false)}
                    className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                  >
                    <FaUser />
                    My Profile
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setDropdown(false);
                      onLogout?.();
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="whitespace-nowrap rounded-full border border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="whitespace-nowrap rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-green-800 transition hover:bg-green-50 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="mb-5 flex h-11 items-center rounded-full border border-gray-200 bg-gray-50 px-4 focus-within:border-green-600 focus-within:bg-white"
          >
            <FaSearch className="shrink-0 text-sm text-green-700" />

            <input
              type="search"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              aria-label="Search books"
              className="ml-2 text-green-700"
            >
              <FaSearch />
            </button>
          </form>

          {/* Mobile Links */}
          <div className="flex flex-col gap-2">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  pathname === link.href
                    ? "bg-green-50 text-green-700"
                    : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile User Menu */}
          {user ? (
            <div className="mt-4 border-t border-gray-100 pt-4">

              <div className="mb-3 flex items-center gap-3">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <FaUser />
                  </div>
                )}

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {user.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>

              <Link
                href="/profile"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-green-50"
              >
                My Profile
              </Link>

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onLogout?.();
                }}
                className="mt-2 flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">

              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex-1 rounded-full border border-green-700 py-2.5 text-center text-sm font-semibold text-green-700"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMobileMenu}
                className="flex-1 rounded-full bg-green-700 py-2.5 text-center text-sm font-semibold text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
