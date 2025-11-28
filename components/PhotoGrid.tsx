import Image from "next/image";
import { photos } from "@/lib/data";

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <figure
          key={index}
          className="group relative aspect-square rounded-xl overflow-hidden bg-white/5"
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
  );
}

