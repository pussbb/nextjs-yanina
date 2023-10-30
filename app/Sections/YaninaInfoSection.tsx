import Image from 'next/image';
import GreenCheck from '@/app/components/GreenCheck';



const YaninaInfoSection = () => {
    return (
        <section className={`section `}>
            <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                    {/* Carousel */}
                    <div className={`service-carousel md:order-1`}>
                        <Image
                            className="ml-1"
                            src="/images/logo.svg"
                            width={350}
                            height={150}
                            alt="logo image"
                        />
                    </div>
                    {/* Content */}
                    <div
                        className={`service-content mt-5 md:mt-0 md:order-2`}
                    >
                        <h2 className="font-bold leading-[40px]">
                            Чому мені довіряють.
                        </h2>
                        <p className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Вища освіта за спеціальністю «Фізична культура і спорт» за професійною кваліфікацією «Тренер-викладач»',
                                        'Більше 20 років в художній гімнастиці',
                                        '7 років діяльності тренера з художньої гімнастики',
                                        '3 роки діяльності тренера-реабілітолога',
                                        'Більше 300 щасливих вихованок'
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}><GreenCheck />{item}</li>)
                                    )
                                }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YaninaInfoSection