import Hero from "@/components/Hero";
import WritingsList from "@/components/WritingsList";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <Hero />
      <WritingsList />
      <ProjectsGrid />
    </div>
  );
}
