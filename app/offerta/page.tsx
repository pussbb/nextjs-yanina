import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';
import Docs from "@/app/offerta/docs";


export const metadata: Metadata = generateDefaultMetadata('Правила повернення грошей')

const Page = () => {

    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <section className="section pb-0">
                <div className="container">
                    <Docs />
                </div>
            </section>
        </main>
    )
}

export default Page