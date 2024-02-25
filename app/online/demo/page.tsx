import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';
import RegisterForTheCourse from "@/app/Sections/RegisterForTheCourse";

export const metadata: Metadata = generateDefaultMetadata('Замовити Онлайн курс «Здорова стопа»')

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-1" >
            <RegisterForTheCourse />
        </main>
    )
}

export default Page
