import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-white/40 text-sm text-center">
          {siteConfig.name} © {currentYear}
        </p>
      </div>
    </footer>
  );
}

