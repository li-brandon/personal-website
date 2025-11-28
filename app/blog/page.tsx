import Link from "next/link";
import { writings } from "@/lib/data";

export const metadata = {
  title: "Blog | Carlos Cuesta",
  description: "Articles about front-end development, JavaScript, and engineering best practices.",
};

function formatViews(views: number): string {
  return views.toLocaleString();
}

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>

        <ul className="space-y-1">
          {writings.map((post) => (
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
    </div>
  );
}

