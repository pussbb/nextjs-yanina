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
        qr: {
            label: 'Проскануйте QR-код чтоб замовити',
            link: 'https://wayforpay.com/qr/img?token=bca897674b495&type=b&size=160',
            orLabel: 'або скористайтесь посиланням',
        },
        button: {
            label: 'Перейти до оплати',
            link: 'https://secure.wayforpay.com/button/bca897674b495'
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
                                {/*
                                    plan.qr && (
                                        <div className="mt-5 mr-auto ml-auto" style={{}}>
                                            {plan.qr.label}
                                            <img alt={'qr code'} src={plan.qr.link} width={180} height={180} className="mt-1 broder loadingImage mr-auto ml-auto"/>
                                            {plan.qr.orLabel}
                                        </div>
                                    )
                                */}
                                <Link
                                    className={`btn mt-5 ${
                                        plan.recommended ? "btn-primary" : "btn-outline-primary"
                                    }`}
                                    href={plan.button.link}
                                >
                                    {plan.button.label}
                                </Link>
                                <p className={'text-sm'} style={{ fontSize: '0.6rem' }}>
                                    Замовляючи товар Ви погоджуетесь з умовами &nbsp;
                                    <Link className="cta-link inline-flex items-center text-primary raspberry-color" href={'/offerta'} >
                                        Оферти
                                    </Link>.
                                    Також Ви можете ознайомитися з &nbsp;
                                    <Link className="cta-link inline-flex items-center text-primary raspberry-color" href={'/refund'} >
                                        Правила повернення грошей
                                    </Link>
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HealthyFeetPrices