import Image from "next/image";
import { siteConfig } from "@/lib/data";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="py-16 border-b border-white/5">
      <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{siteConfig.location}</span>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Hey, I&apos;m {siteConfig.name.split(" ")[0]}
            <span className="inline-block ml-3 animate-wave origin-[70%_70%]">
              👋🏼
            </span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-3">
            {siteConfig.tagline}
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            {siteConfig.description}
          </p>

          {/* Social icons + RSS in hero like mohamed3on */}
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Get in touch:</span>
            <SocialIcons />
            <a
              href={siteConfig.rssUrl}
              className="text-white/40 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 text-sm"
              title="RSS Feed"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
              </svg>
              RSS
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/5 shadow-2xl shadow-emerald-500/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
