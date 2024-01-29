import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';

export const metadata: Metadata = generateDefaultMetadata('Замовити Онлайн курс «Здорова стопа»')

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-1" >
            <iframe
                title="Survey"
                src="https://docs.google.com/forms/d/e/1FAIpQLSe5CH9Q4h087lLw9vJchPRFOhLFrjdgwd1-GQ-MQZmltbQGlA/viewform?embedded=true"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ width: "100%", height: "calc(90vh - 3px)", marginTop: '50px', overflow: 'hidden'}} >
                loading...
            </iframe>
        </main>
    )
}

export default Page

/// <iframe src="" width="640" height="990" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>