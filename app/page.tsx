import Resume from "@/components/resume/Resume";
import TechStacksContainer from "@/components/techStack/TechStacksContainer";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-8">
      <Resume />
      <TechStacksContainer />
    </section>
  );
}

