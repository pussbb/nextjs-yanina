import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';
import Link from "next/link";


export const metadata: Metadata = generateDefaultMetadata('Правила повернення грошей')

const Page = () => {

    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <section className="section pb-0">
                <div className="container">
                    <br/>
                    <Link className="cta-link inline-flex items-center text-primary raspberry-color"
                          href={"/ДОГОВІР_ПУБЛІЧНОЇ_ОФЕРТИ_ПРО_НАДАННЯ_ІНФОРМАЦІЙНИХ_ПОСЛУГ.docx"}>
                        Загрузити документ "Договір публічної оферти"
                    </Link>
                    <br/>
                    <Link className="cta-link inline-flex items-center text-primary raspberry-color"
                          href={"/Правила повернення грошових коштів.docx"}>
                        Загрузити документ "Правила повернення грошових коштів"
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Page