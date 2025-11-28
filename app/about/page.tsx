import Image from "next/image";
import { aboutContent, photos } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";
import WorkTimeline from "@/components/WorkTimeline";
import TravelMap from "@/components/TravelMap";

export const metadata = {
  title: "About | Carlos's Corner",
  description: "Learn more about Carlos Cuesta, a Front End Engineer based in Barcelona.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-white mb-10">About me</h1>

        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            <em className="text-white/70 not-italic">{aboutContent.intro}</em>
          </p>
          <p>{aboutContent.current}</p>
          <p>{aboutContent.passion}</p>
          <p>{aboutContent.background}</p>
          <p>{aboutContent.outside}</p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
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
