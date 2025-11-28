import Link from "next/link";
import { writings } from "@/lib/data";

export const metadata = {
  title: "Blog | Carlos's Corner",
  description: "Articles about front-end development, JavaScript, and engineering best practices.",
};

function formatViews(views: number): string {
  return views.toLocaleString();
}

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-white/50 text-lg mb-12">
          Thoughts on software engineering, front-end development, and building products.
        </p>

        <ul className="space-y-6">
          {writings.map((post) => (
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
                    <span className="text-white/40">Published:</span>
                    <span className="text-white/50">{post.date}</span>
                  </div>
                  
                  {post.description && (
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
    </div>
  );
}
