import careers from "@/data/careers";

export default function Career() {
  return (
    <>
      {careers.map((career) => (
        <div key={career.company} className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{career.company}</h2>
          <div className="flex flex-col gap-2 text-xs font-medium opacity-60">
            <div className="flex items-center gap-3 text-base">
              <span>{career.team}</span>
              <span className="block size-1 bg-black rounded-full" />
              <span>{career.position}</span>
            </div>
            <span className="text-base">{career.period}</span>
          </div>
          <div className="text-sm whitespace-normal">
            <ul className="list-disc ml-4 flex flex-col gap-3">
              {career.summary.map((sum, index) => (
                <li
                  key={`${career.company}-summary-${index}`}
                  className="text-base font-medium"
                >
                  {sum}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
