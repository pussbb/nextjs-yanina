import HealthyFeetPrices from '@/app/Sections/HealthyFeet/HealthyFeetPrices';
import RefundRules from '@/app/Sections/RefundRules';

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