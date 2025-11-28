import { siteConfig } from "@/lib/data";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <SocialIcons iconClassName="hover:text-emerald-400" />
          <p className="text-white/30 text-sm">
            Copyright © {currentYear} | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
