import GreenCheck from '@/app/components/GreenCheck';
import Image from 'next/image';

const YaninaInfoSection = () => {
    const yearsAsTrainer = new Date().getFullYear() - 2016
    const yearsAsTrainer2 = new Date().getFullYear() - 2020

    return (
        <section className={`section bg-theme-light`}>
            <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                    {/* Carousel */}
                    <div className={`service-carousel md:order-1`}>
                        <Image
                            className="mx-auto mt-12"
                            src={'/imgs/IMG_4784.jpeg'}
                            width={550}
                            height={390}
                            alt="yanina popesko image"
                            priority
                        />
                    </div>
                    {/* Content */}
                    <div className={`service-content mt-5 md:mt-0 md:order-2`} >
                        <h2 className="font-bold thisCourse leading-[40px]"> Чому мені довіряють:</h2>
                        <div className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Вища освіта за спеціальністю «Фізична культура і спорт» за професійною кваліфікацією «Тренер-викладач»',
                                        'Більше 20 років в художній гімнастиці',
                                        `${yearsAsTrainer} років діяльності тренера з художньої гімнастики`,
                                        `${yearsAsTrainer2} роки діяльності тренера-реабілітолога`,
                                        'Більше 300 щасливих вихованок',
                                        'Європейська ліцензія тренера з художньої гімнастики',
                                        'Українська національна суддівська ліцензія 4-ої категорії х художньої гімнастіки',
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}><GreenCheck />{item}</li>)
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YaninaInfoSection