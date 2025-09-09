import educations from "@/data/educations";

export default function Education() {
  return (
    <>
      {educations.map((education) => (
        <div key={education.organization} className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">{education.organization}</h2>
          <span className="text-xs font-medium opacity-60">{education.period}</span>
          <div className="text-sm">
            {education.summary.map((sum, index) => (
              <span key={`${education.organization}-${index}`}>{sum}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
