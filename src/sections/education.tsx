import educations from "@/data/educations";

export default function Education() {
  return (
    <>
      {educations.map((education) => (
        <div key={education.organization} className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">{education.organization}</h2>
          <span className="block font-medium opacity-60">
            {education.period}
          </span>
          <div className="text-base md:text-lg font-medium flex flex-col gap-2">
            {education.summary.map((sum, index) => (
              <span key={`${education.organization}-${index}`}>{sum}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
