import certificates from "@/data/certificates";

export default function Certificate() {
  return (
    <>
      {certificates.map((certificate) => (
        <div key={certificate.name} className="flex flex-col">
          <h2 className="text-lg font-medium">{certificate.name}</h2>
          <div className="text-xs font-medium opacity-60">{certificate.period}</div>
        </div>
      ))}
    </>
  );
}

