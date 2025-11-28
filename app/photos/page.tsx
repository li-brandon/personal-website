import Image from "next/image";
import { photos } from "@/lib/data";

export const metadata = {
  title: "Photos | Carlos's Corner",
  description: "A collection of memorable moments and travels.",
};

export default function PhotosPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Photos</h1>
        <p className="text-white/50 text-lg mb-12">
          A collection of memorable moments and adventures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white/5 ${
                index === 0 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-lg font-medium">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
