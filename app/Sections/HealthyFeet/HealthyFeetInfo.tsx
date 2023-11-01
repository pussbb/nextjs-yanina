import GreenCheck from '@/app/components/GreenCheck';
import { Accordion } from '@/app/components/Accordion';
import Image from 'next/image';
import Link from 'next/link';


const HealthyFeetInfo = () => {
    return (
        <>
            <section className={'section bg-theme-light'}>
                <div className="container">
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        {/* Carousel */}
                        <div className={'service-carousel md:order-2'}>
                            зображення
                        </div>
                        {/* Content */}
                        <div className={'service-content mt-5 md:mt-0 md:order-1'}>
                            <h2 className="font-bold leading-[40px]">
                                Постановка стопи — важлива частина осанки дитини.
                            </h2>
                            <p className="mt-4 mb-2">

                                Як нервова система зчитує інформацію від стопи про її опору
                                на поверхню, так і вибудовує все тіло дитини вертикально в цілом
                                <br/>
                                Причини вальгусу не в самих стопах: найчастіше це неправильне положення таза,
                                напруга шийно-потиличного переходу, неправильна робота діафрагми і ін.
                                <br/>

                                Устілки та масажі не працюють
                                Устілка «вимикає стопу» і не працює на корекцію вальгуса і плоскостопія.
                                Масажі хороші тільки в комплексі. Виправлення сутулості та вальгусу
                                неможливе без грамотної лікувальної фізкультури для дітей.


                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'section'}>
                <div className="container">
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        {/* Carousel */}
                        <div className={'service-carousel md:order-2'}>
                            зображення
                        </div>
                        {/* Content */}
                        <div
                            className={'service-content mt-5 md:mt-0 md:order-1'}
                        >
                            <h2 className="font-bold leading-[40px]">
                                Що треба для занять на курсі?
                            </h2>
                            <p className="mt-4 mb-2">
                                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                    <li className={'flex items-center'}><GreenCheck />Фітнес стрічка довга</li>
                                    <li className={'flex items-center'}><GreenCheck />Відео. І опис</li>
                                    <li className={'flex items-center'}><GreenCheck />1,2-1,5 м,</li>
                                    <li className={'flex items-center'}><GreenCheck />товщина 0,35-0,45 мм</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'section bg-theme-light'}>
                <Accordion items={[
                    {
                        title: 'Протипоказання',
                        content: 'Якщо у тебе є запитання щодо протипоказань, напиши мені для консультації. (телеграм, інстаграм)'
                    },
                    {
                        title: 'Скільки разів на тиждень треба займатися?',
                        content: 'Я раджу займатися кожен день по 15-20 хвилин.'
                    },
                    {
                        title: 'Чому в курсі вправи не лише на стопи?',
                        content: 'В курсі 4 ключові вправи на розвиток опорно-рухового апарату. Наше завдання —\n' +
                            ' не лише навчити стопу правильному руху, а й включити в роботу м`язи, які слабкі\n' +
                            ' у конкретної дитини, а також покращити баланс та симетрію у всьому тілі.'

                    },
                    {
                        title: 'Чому накращий вік з 4 до 12 років?',
                        content: <ul className='space-y-1 text-gray-500 list-inside'>
                            <li className='flex items-center'>
                                <GreenCheck />
                                Дитина активно росте і пластична. Закласти нові нейронні зв&apos;язки та патерни руху
                                у цьому віці набагато простіше!
                            </li>
                            <li className='flex items-center'>
                                <GreenCheck />
                                Порушення ще не встигли зафіксуватись на кістковому рівні.
                            </li>
                            <li className='flex items-center'>
                                <GreenCheck />
                                Легше домовитись на регулярні заняття.
                            </li>
                        </ul>

                    }
                ]} />
            </section>

            <section className="section px-4">
                <div className="section container rounded-xl shadow">
                    <div className="row  mx-auto items-center justify-center">
                        <div className="md:col-5 lg:col-4">
                            <Image
                                className="mx-auto mt-12"
                                src={'/images/logo.svg'}
                                width={550}
                                height={390}
                                alt="logo image"
                                priority
                            />
                        </div>
                        <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
                            <h2>Готові розпочати співпрацю?</h2>
                            <p className="mt-6">
                                Тоді почнемо з першого кроку — замовте курс «Здорова стопа» для дітей 4-12 років.
                                та обговоримо деталі.
                            </p>
                            <Link className="btn btn-primary mt-4" href={'/order'}>Замовити</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HealthyFeetInfo