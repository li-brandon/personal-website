"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Posts", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Talks", href: "/talks" },
    { name: "Photos", href: "/photos" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/90 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-semibold hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-lg">{siteConfig.siteName}</span>
          </Link>
          
          <div className="flex items-center gap-1">
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                        ? "text-white bg-white/5"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 ml-2"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Search overlay */}
        {searchOpen && (
          <div className="mt-4 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-2">
          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-white bg-white/5"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
