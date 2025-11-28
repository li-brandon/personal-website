import Link from "next/link";
import { projects } from "@/lib/data";

function formatStars(stars: number): string {
  return stars.toLocaleString();
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Shell: "bg-emerald-500",
    Python: "bg-blue-400",
    Rust: "bg-orange-500",
  };
  return colors[language] || "bg-gray-500";
}

interface ProjectsGridProps {
  showAll?: boolean;
}

export default function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        {!showAll && (
          <Link
            href="/projects"
            className="text-sm text-white/50 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
          >
            View all
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayProjects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{project.emoji}</span>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-white/40 text-sm">
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="tabular-nums">{formatStars(project.stars)}</span>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(
                  project.language
                )}`}
              ></span>
              <span className="text-white/40 text-sm">{project.language}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
