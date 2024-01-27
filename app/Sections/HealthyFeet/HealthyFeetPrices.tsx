import Link from 'next/link';
import GreenCheck from '@/app/components/GreenCheck';

const plans = [
    {
        title: 'Basic',
        subtitle: '',
        price: 1499,
        type: '5 тижнів',
        recommended: false,
        features: [
            '8 комплексів тренувань',
            'масажні техніки',
            'техніка тейпування',
            'чат підтримки',
            '1 місяць відкритого доступу',
            'закритий прямий ефір з лікарем-ортопедом',
            'рекомендації стосовно вашого діагнозу',
        ],
        button: {
            label: 'Замовити',
            link: '/buy'
        }
    },
    {
        title: 'VIP',
        subtitle: '',
        price: 2499,
        type: '5 тижнів',
        recommended: false,
        features: [
            '8 комплексів тренувань',
            'масажні техніки',
            'техніка тейпування',
            'чат підтримки',
            '1 місяць відкритого доступу',
            'закритий прямий ефір з лікарем-ортопедом',
            'рекомендації стосовно вашого діагнозу',
            (<b key='asdasdasd'>візуальна діагностика від лікаря-ортопеда</b>),
            (<b key='asdasdas32323d'>зворотній звʼязок щодо виконання вправ</b>),
            (<b key='asdasd2323asd'>2 онлайн зустрічі з яніною (60 хвилин тренування)</b>),
            (<b key='asdas23wdasd'>рекомендації після завершення курсу</b>)
        ],
        button: {
            label: 'Замовити',
            link: '/buy'
        }
    }
]

const HealthyFeetPrices = () => {
    return (
        <section className="section pb-0">
            <div className="container">
                <h1 className="text-center font-normal">Тарифи</h1>
                <div className="section row -mt-10 justify-center md:mt-0">
                    {plans.map((plan, index) => (
                        <div
                            className={`col-12 md:col-4 ${
                                !plan.recommended ? "lg:px-0" : "col-recommended"
                            }`}
                            key={plan.title + index}
                        >
                            <div className="card text-center">
                                <h4>{plan.title}</h4>
                                <div className="mt-5">
                                    <span className="text-5xl text-dark">₴ {plan.price}</span>
                                    <span>/</span>
                                    <span className={'spanPlanType'}>{plan.type}</span>
                                </div>
                                <h5 className="mt-2 font-normal text-text">
                                    {plan.subtitle}
                                </h5>
                                <ul className="mt-5" style={{ textAlign: 'left' }}>
                                    {plan.features.map((feature, index) => (
                                        <li className="mb-[10px] leading-5 flex items-center" key={index} ><GreenCheck />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    className={`btn mt-5 ${
                                        plan.recommended ? "btn-primary" : "btn-outline-primary"
                                    }`}
                                    href={plan.button.link}
                                >
                                    {plan.button.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HealthyFeetPrices