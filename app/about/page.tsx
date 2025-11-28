import Image from "next/image";
import { aboutContent, photos } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";
import WorkTimeline from "@/components/WorkTimeline";
import TravelMap from "@/components/TravelMap";

export const metadata = {
  title: "About | Carlos Cuesta",
  description: "Learn more about Carlos Cuesta, a Front End Engineer based in Barcelona.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">About me</h1>

        <div className="prose prose-invert dark:prose-invert max-w-none space-y-4">
          <p className="text-foreground/70 leading-relaxed">
            <em>{aboutContent.intro}</em>
          </p>
          <p className="text-foreground/70 leading-relaxed">{aboutContent.current}</p>
          <p className="text-foreground/70 leading-relaxed">{aboutContent.passion}</p>
          <p className="text-foreground/70 leading-relaxed">{aboutContent.background}</p>
          <p className="text-foreground/70 leading-relaxed">{aboutContent.outside}</p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 dark:from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SocialLinks />
      <WorkTimeline />
      <TravelMap />
    </div>
  );
}
