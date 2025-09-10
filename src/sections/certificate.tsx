import certificates from "@/data/certificates";

export default function Certificate() {
  return (
    <>
      {certificates.map((certificate) => (
        <div key={certificate.name} className="flex flex-col space-y-6">
          <h2 className="text-2xl font-medium">{certificate.name}</h2>
          <div className="font-medium opacity-60">{certificate.period}</div>
        </div>
      ))}
    </>
  );
}
