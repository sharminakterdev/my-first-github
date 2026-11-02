import Link from "next/link";

import {
  FaBookOpen,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-[#063d2d] to-[#002b20] text-white">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaBookOpen className="text-4xl" />

            <span className="text-2xl font-extrabold">
              Book<span className="text-green-300">Nook</span>
            </span>
          </Link>

          <p className="mt-2 text-sm text-green-100">
            Read More. Live Better.
          </p>

          <p className="mt-2 max-w-xs text-xs leading-6 text-green-100/80">
            Discover your next favorite book and enjoy the beautiful journey
            of reading with BookNook.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 font-bold">Contact Us</h3>

          <div className="flex flex-col gap-3 text-sm text-green-100">
            <a href="mailto:hello@booknook.com" className="flex items-center gap-2">
              <FaEnvelope />
              hello@booknook.com
            </a>

            <a href="tel:+8801234567890" className="flex items-center gap-2">
              <FaPhoneAlt />
              +880 1234 567890
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-3 font-bold">Follow Us</h3>

          <div className="flex items-center gap-4 text-xl">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://x.com" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="https://github.com" aria-label="Github">
              <FaGithub />
            </a>

            <a href="https://youtube.com" aria-label="Youtube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-green-100 lg:text-right">
          <p>© 2026 BookNook.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}