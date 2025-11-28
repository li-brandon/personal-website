import { projects } from "@/lib/data";

function formatStars(stars: number): string {
  return stars.toLocaleString();
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Shell: "bg-green-500",
    Python: "bg-blue-400",
    Rust: "bg-orange-500",
  };
  return colors[language] || "bg-gray-500";
}

export default function ProjectsGrid() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold text-white mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{project.emoji}</span>
                <h3 className="font-medium text-white group-hover:text-white/90">
                  {project.name}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-white/40 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{formatStars(project.stars)}</span>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${getLanguageColor(
                  project.language
                )}`}
              ></span>
              <span className="text-white/40 text-sm">{project.language}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

