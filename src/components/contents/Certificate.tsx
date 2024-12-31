import ContentLayout from '@/components/contents/ContentLayout'
import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import certificates from '@/data/certificates'
import styled from 'styled-components'

export default function Certificate() {
    return (
        <ContentLayout title="Certificate">
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
        </ContentLayout>
    )
}

const CertificateLayout = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 1.4rem;
    }
`
