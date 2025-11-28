import Image from "next/image";
import { photos } from "@/lib/data";

export const metadata = {
  title: "Photos | Carlos Cuesta",
  description: "A collection of memorable moments and travels.",
};

export default function PhotosPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Photos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
