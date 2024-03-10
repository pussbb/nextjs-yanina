import Image from "next/image";
import GreenCheck from "@/app/components/GreenCheck";
import Link from "next/link";


const HealthyFeetForYou = () => {
    return (
        <section className={`section `}>
            <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                    {/* Carousel */}
                    <div className={`service-carousel md:order-2`}>
                        <Image
                            className="mx-auto"
                            src={'/imgs/IMG_4919-2.JPG'}
                            width={585}
                            height={582}
                            loading={'lazy'}
                            alt=""
                        />
                    </div>
                    {/* Content */}
                    <div className={`service-content mt-5 md:mt-0 md:order-1`}>
                        <h2 className="thisCourse font-bold leading-[40px]">
                            Цей курс для вас, <span>якщо:</span>
                        </h2>
                        <div className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Хочете щоб Ваша дитина виросла здоровою, кріпкою, підтянутою, з хорошою координацією і легкою ходою.',
                                        'Шукаєте єфективні вправи, щоб дитина забула про біль у ногах, не сильно втомлювалася і могла займатися з успіхом будь-якою активністі.',
                                        'Бажаєте привчити дитину займатися собою та створити фундамент здорового майбутнього'
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}>
                                            <GreenCheck/>{item}</li>)
                                    )
                                }
                            </ul>

                        </div>
                        <br/>
                        <Link
                            href={'/order'}
                            className="cta-link inline-flex items-center text-primary raspberry-color"
                        >
                            Замовити
                            <Image
                                className="ml-1"
                                src="/images/arrow-right.svg"
                                width={18}
                                height={14}
                                alt="arrow"
                                loading={'lazy'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthyFeetForYou;