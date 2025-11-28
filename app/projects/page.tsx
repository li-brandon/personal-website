import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects | Carlos's Corner",
  description: "Open source projects and side projects I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-white/50 text-lg mb-12">
          Open source projects and tools I&apos;ve built over the years.
        </p>
        <ProjectsGrid showAll />
      </section>
    </div>
  );
}

