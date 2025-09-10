import type React from "react";
import { useRef } from "react";
import Career from "@/sections/career";
import Certificate from "@/sections/certificate";
import Education from "@/sections/education";
import Project from "@/sections/project";


export default function Content() {
  const elementRefs = useRef<HTMLElement[]>([]);

  const sections = [
    { id: "career", title: "Career", component: <Career /> },
    { id: "project", title: "Project", component: <Project /> },
    { id: "education", title: "Education", component: <Education /> },
    { id: "certificate", title: "Certificate", component: <Certificate /> },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <section
          id={section.id}
          key={section.id}
          ref={(ref) => {
            if (ref) elementRefs.current[index] = ref;
          }}
          className="px-4 py-12 sm:px-8 md:px-12 lg:px-24"
        >
          <ContentLayout title={section.title}>
            {section.component}
          </ContentLayout>
        </section>
      ))}
    </>
  );
}

function ContentLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <hr className="my-8 h-1 border-0 bg-primary" />
      <div className="grid gap-10 md:gap-20">{children}</div>
    </>
  );
}
