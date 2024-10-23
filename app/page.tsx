import Resume from "@/components/resume/Resume";
import TechStacks from "@/components/techStack/TechStacks";

export default function Home() {
  return (
    <section className='w-full h-full flex flex-col'>
      <Resume />
      <TechStacks />
    </section> 

  );
}
