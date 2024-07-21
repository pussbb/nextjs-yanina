import Link from 'next/link';
import GreenCheck from '@/app/components/GreenCheck';

const plans = [
    {
        title: 'Basic (40 місць)',
        subtitle: '',
        price:(<><small><s>2000</s></small> 1499</>),
        type: '5 тижнів',
        recommended: false,
        features: [
            '8 комплексів тренувань',
            'чат підтримки',
            'техніки масажу',
            'техніки тейпування',
            'закриті прямі ефіри',
            '5 тижнів відкритого доступу'
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
        title: 'Gold (15 місць)',
        subtitle: '',
        //price: 2499,
        price:(<><small><s>3000</s></small> 2499</>),
        type: '5 тижнів',
        recommended: false,
        features: [
            '8 комплексів тренувань',
            'чат підтримки',
            'техніки масажу',
            'техніки тейпування',
            'закриті прямі ефіри',
            '5 тижнів доступу',
            (<b key='awwwsdasdasd'>5 групових онлайн тренувань в zoom з Яніною</b>),
            (<b key='23e23432432rcasf'>діагностика постави по фото</b>),
            (<b key='sadasdsa'>зворотній звʼязок щодо виконання вправ</b>)
        ],
        button: {
            label: 'Перейти до оплати',
            link: 'https://secure.wayforpay.com/button/bb9e25af4dee4'
        }
    },
    {
        title: 'Platinum',
        subtitle: '(2 місця) діти від 7 років',
        price: 8000,
        type: '5 тижнів',
        recommended: false,
        features: [
            '8 комплексів тренувань',
            'чат підтримки',
            'техніки масажу',
            'техніки тейпування',
            'закриті прямі ефіри',
            '5 тижнів доступу',
            '5 групових онлайн тренувань в zoom з Яніною',
            'діагностика постави по фото',
            'зворотній звʼязок щодо виконання вправ',
            (<b key='w222cdqwded'>5 індивідуальних тренувань з Яніною</b>),
            (<b key='wqwxasxascdqwded'>особиста перевірка домашніх завдань</b>)
        ],
        button: {
            label: 'Перейти до оплати',
            link: 'https://secure.wayforpay.com/button/bebb0424d4479'
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
                                {/*
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
*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HealthyFeetPrices