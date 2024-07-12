import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';
import Link from "next/link";
import RefundRules from "@/app/Sections/RefundRules";
import Rules from "@/app/offerta/rules";


export const metadata: Metadata = generateDefaultMetadata('Правила повернення грошей')

const Page = () => {

    return (
        <main className="flex min-h-screen flex-col justify-between p-1">
            <section className="section pb-0">
                <div className="container">
                    <div className="items-center">
                        <br/>
                        <Rules />
                        <Link className="cta-link inline-flex items-center text-primary raspberry-color"
                              href={"/ДОГОВІР_ПУБЛІЧНОЇ_ОФЕРТИ_ПРО_НАДАННЯ_ІНФОРМАЦІЙНИХ_ПОСЛУГ.docx"}>
                            Загрузити документ &quot;Договір публічної оферти&quot;
                        </Link>
                        <br/>
                    </div>
                    <div className="items-center">
                        <RefundRules/>
                        <Link className="cta-link inline-flex items-center text-primary raspberry-color"
                              href={"/Правила повернення грошових коштів.docx"}>
                            Загрузити документ
                        </Link>
                    </div>
                </div>
            </section>
        </main>
)
}

export default Page