import HealthyFeetPrices from '@/app/Sections/HealthyFeet/HealthyFeetPrices';
import RefundRules from '@/app/Sections/RefundRules';
import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';

export const metadata: Metadata = generateDefaultMetadata('Замовити Онлайн курс «Здорова стопа»')

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <HealthyFeetPrices />
            <RefundRules />
            <br />
            <br />
        </main>
    )
}

export default Page