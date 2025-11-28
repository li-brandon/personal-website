import Image from "next/image";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 text-foreground/50 text-sm mb-6">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>{siteConfig.location}</span>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hey, I&apos;m {siteConfig.name.split(" ")[0]} {siteConfig.name.split(" ")[1]}
            <span className="inline-block ml-2 animate-wave origin-[70%_70%]">
              👋🏼
            </span>
          </h1>
          <p className="text-foreground/70 text-lg leading-relaxed mb-2">
            {siteConfig.tagline}
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-border shadow-2xl">
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
