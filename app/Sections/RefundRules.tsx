"use client"

const RefundRules = () => {

    /// eWFuaW5hcG9wZXNrb0BnbWFpbC5jb20=

    return (
        <section className={`section-refund`}>
            <div className="container">
                <div className={`service-content mt-5 md:mt-0 md:order-1`} >
                    <h2 className="font-bold leading-[40px]">
                        Правила повернення грошових коштів
                    </h2>
                    <p className="mt-4 mb-2">
                        Повернути товар (електронний продукт) та отримати повну компенсацію його вартості можна протягом 14 днів
                        з моменту придбання, у випадку відміни чи неможливості надання послуг зі сторони постачальника.<br/>

                        У всіх інших випадках повернення коштів не передбачене.<br/>

                        Є виключення випадку неможливості клієнтом скористуватися електронним продуктом через
                        непередбачені ситуації щодо стану здоров’я та ін. можливе переглядання повернення коштів/перенесення
                        дати надання послуг зі сторони постачальника на власний розсуд.<br/>
                        Якщо ви хочете повернути/переглянути дати проведення електронного продукту, надішліть на електронну
                        пошту(<a href="#" className={'cta-link inline-flex items-center text-primary raspberry-color'} onClick={() => {
                          //  window.open( "mailto:" + atob("eWFuaW5hcG9wZXNrb0BnbWFpbC5jb20="), '_blank', "noopener")?.focus();
                        window.location.href = "mailto:" + atob("eWFuaW5hcG9wZXNrb0BnbWFpbC5jb20=")
                        }}>Email</a>) лист з наступними даними:<br/>
                        • Дата та час придбання<br/>
                        • Електронну версію документу, що підтверджує сплату вами повної вартості товару (квитанція з банку по цій транзакції).
                    </p>
                </div>
            </div>
        </section>
    )
}

export default RefundRules