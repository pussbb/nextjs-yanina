import Link from 'next/link';
import Image from 'next/image';
import GreenCheck from '@/app/components/GreenCheck';


const HealthyFeetInfo = () => {
    return (
        <>
            <section className={`section `}>
                <div className="container">
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        {/* Carousel */}
                        <div className={`service-carousel md:order-2`}>
                            зображення
                        </div>
                        {/* Content */}
                        <div
                            className={`service-content mt-5 md:mt-0 md:order-1`}
                        >
                            <h2 className="font-bold leading-[40px]">

                            </h2>
                            <p className="mt-4 mb-2">
                                Постановка стопи — важлива частина осанки дитини.
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

            <section className={`section `}>
                <div className="container">
                    <div className="items-center gap-8">
                        {/* Content */}
                        <div
                            className={`service-content mt-5 md:mt-0 md:order-1`}
                        >
                            <h2 className="font-bold leading-[40px]">
                                Протипоказання
                            </h2>
                            <p className="mt-4 mb-2">
                                Якщо у тебе є запитання щодо протипоказань, напиши мені для консультації. (телеграм, інстаграм)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section `}>
                <div className="container">
                    <div className="items-center gap-8 md:grid md:grid-cols-2">
                        {/* Carousel */}
                        <div className={`service-carousel md:order-2`}>
                            зображення
                        </div>
                        {/* Content */}
                        <div
                            className={`service-content mt-5 md:mt-0 md:order-1`}
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

            <section className={`section `}>
                <div className="container">
                    <div className="items-center gap-8">
                        <div className={`service-content mt-5 md:mt-0 md:order-1`}>
                            <h4 className="font-bold leading-[40px]">
                                Скільки разів на тиждень треба займатися?
                            </h4>
                            <p className="mt-4 mb-2">
                                Я раджу займатися кожен день по 15-20 хвилин.
                            </p>

                            <h4 className="font-bold leading-[40px]">
                                Чому в курсі вправи не лише на стопи?
                            </h4>
                            <p className="mt-4 mb-2">
                                В курсі 4 ключові вправи на розвиток опорно-рухового апарату. Наше завдання —
                                не лише навчити стопу правильному руху, а й включити в роботу м'язи, які слабкі
                                у конкретної дитини, а також покращити баланс та симетрію у всьому тілі.
                            </p>

                            <h3 className="font-bold leading-[40px]">
                                ЧОМУ НАЙКРАЩИЙ ВІК З 4 ДО 12 РОКІВ?
                            </h3>
                            <p className="mt-4 mb-2">
                                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                    <li>
                                        Дитина активно росте і пластична. Закласти нові нейронні зв'язки та патерни руху у цьому віці набагато простіше!
                                    </li>
                                    <li>
                                        Порушення ще не встигли зафіксуватись на кістковому рівні.
                                    </li>
                                    <li>
                                        Легше домовитись на регулярні заняття.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HealthyFeetInfo