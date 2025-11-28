import Link from "next/link";
import { writings } from "@/lib/data";

function formatViews(views: number): string {
  return views.toLocaleString();
}

export default function WritingsList({ showAll = false }: { showAll?: boolean }) {
  const displayWritings = showAll ? writings : writings;

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-white">Writings</h2>
        {!showAll && (
          <Link
            href="/blog"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1"
          >
            View all
            <span className="text-xs">→</span>
          </Link>
        )}
      </div>

      <ul className="space-y-1">
        {displayWritings.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-white/40 text-sm w-24 shrink-0">
                  {post.date}
                </span>
                <span className="text-white group-hover:text-white/90 transition-colors">
                  {post.title}
                </span>
              </div>
              <span className="text-white/30 text-sm">
                {formatViews(post.views)} views
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

