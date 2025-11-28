"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Photos", href: "/photos" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            {siteConfig.name}
          </Link>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

