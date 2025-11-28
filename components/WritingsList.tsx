import Link from "next/link";
import { writings } from "@/lib/data";

function formatViews(views: number): string {
  return views.toLocaleString();
}

interface WritingsListProps {
  showAll?: boolean;
  showDescriptions?: boolean;
}

export default function WritingsList({ showAll = false, showDescriptions = true }: WritingsListProps) {
  const displayWritings = showAll ? writings : writings.slice(0, 5);

  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Recent Posts</h2>
        {!showAll && (
          <Link
            href="/blog"
            className="text-sm text-white/50 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
          >
            All Posts
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        )}
      </div>

      <ul className="space-y-6">
        {displayWritings.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-4 px-5 -mx-5 rounded-xl hover:bg-white/[0.03] transition-all duration-200"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-white/30 text-sm shrink-0 tabular-nums">
                    {formatViews(post.views)} views
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-white/40">
                    Published:
                  </span>
                  <span className="text-white/50">{post.date}</span>
                </div>
                
                {showDescriptions && post.description && (
                  <p className="text-white/50 text-sm leading-relaxed mt-1">
                    {post.description}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
