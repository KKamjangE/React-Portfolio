import type React from "react";
import { useRef } from "react";
import Career from "@/components/contents/career";
import Certificate from "@/components/contents/certificate";
import Education from "@/components/contents/education";
import Project from "@/components/contents/project";
import TechStack from "@/components/contents/tech-stack";
import FadeIn from "@/components/ui/fade-in.motion";
import YellowPoint from "@/components/ui/yellow-point";

export default function Content() {
  const elementRefs = useRef<HTMLElement[]>([]);

  const sections = [
    { title: "Career", component: <Career /> },
    { title: "TechStack", component: <TechStack /> },
    { title: "Project", component: <Project /> },
    { title: "Education", component: <Education /> },
    { title: "Certificate", component: <Certificate /> },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <section
          id={section.title.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()}
          key={section.title}
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
      <FadeIn>
        <h1 className="text-3xl font-bold">
          <YellowPoint>{title}</YellowPoint>
        </h1>
      </FadeIn>
      <FadeIn>
        <hr className="my-8 h-1 border-0 bg-accent" />
      </FadeIn>
      <div className="grid gap-10 md:gap-20">{children}</div>
    </>
  );
}
