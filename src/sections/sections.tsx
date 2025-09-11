import { Separator } from "@/components/ui/separator";
import Career from "@/sections/career";
import Certificate from "@/sections/certificate";
import Education from "@/sections/education";
import Project from "@/sections/project";

export default function Content() {
  const sections = [
    { id: "career", title: "Career", component: <Career /> },
    { id: "project", title: "Project", component: <Project /> },
    { id: "education", title: "Education", component: <Education /> },
    { id: "certificate", title: "Certificate", component: <Certificate /> },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 py-12 sm:px-8 md:px-12 lg:px-12 mb-[200px]">
      {sections.map((section, index) => (
        <>
          {index !== 0 && <Separator className="my-8 bg-primary" />}
          <section id={section.id} key={section.id} className="">
            <h1 className="text-3xl md:text-4xl font-bold text-sky-400">{section.title}</h1>
            <div className="grid gap-8 md:gap-14 px-4 py-6">
              {section.component}
            </div>
          </section>
        </>
      ))}
    </div>
  );
}
