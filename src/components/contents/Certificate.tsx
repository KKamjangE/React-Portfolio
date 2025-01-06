import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import certificates from '@/data/certificates'
import styled from 'styled-components'

export default function Certificate() {
    return (
        <>
            {certificates.map((certificate, idx) => (
                <CertificateLayout key={idx}>
                    <FadeIn>
                        <h2>
                            <YellowPoint>{certificate.name}</YellowPoint>
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <div className="period">{certificate.period}</div>
                    </FadeIn>
                </CertificateLayout>
            ))}
        </>
    )
}

const CertificateLayout = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 1.2rem;
        font-weight: 500;
    }
    .period {
        font-size: 0.7rem;
        font-weight: 500;
        opacity: 0.6;
    }
`
