import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';
import RegisterForTheCourse from "@/app/Sections/RegisterForTheCourse";

export const metadata: Metadata = generateDefaultMetadata('Заявка на безкоштовну консультацію  (діагностика постави дитини та рекомендації) Онлайн курсу «Здорова стопа»')

// Заявка на безкоштовну консультацію  (діагностика постави дитини та рекомендації)
metadata.description = 'Записатися на безкоштовну консультацію для Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день'
metadata.keywords = [
    ...(metadata.keywords as string[] || []),
    'Записатися',
    'безкоштовна консультація',
    'консультація',
    'діагностика постави дитини та рекомендації',
    'діагностика постави',
    'рекомендації'
]

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <RegisterForTheCourse />
        </main>
    )
}

export default Page
