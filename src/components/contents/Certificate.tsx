import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import certificates from '@/data/certificates'

export default function Certificate() {
  return (
    <>
      {certificates.map((certificate) => (
        <div key={certificate.name} className="flex flex-col">
          <FadeIn>
            <h2 className="text-lg font-medium">
              <YellowPoint>{certificate.name}</YellowPoint>
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="text-xs font-medium opacity-60">{certificate.period}</div>
          </FadeIn>
        </div>
      ))}
    </>
  )
}