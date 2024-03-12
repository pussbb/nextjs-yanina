import Link from "next/link";

const HealthyFeetIntroShort = () => {
    return (
        <section className="HealthyFeetIntroShort section pb-[50px]">
            <div className="container">
                <div className="row text-center">
                    <div className="mx-auto lg:col-10">
                        <h1 className="font-primary font-bold">
                            Онлайн курс «Здорова стопа»
                        </h1>
                        <h3> для дітей 4-12 років</h3>
                        <h5>Виправляємо вальгус і плоскостопість за 20 хвилин на день.</h5>
                        <Link className="btn btn-primary mt-4 " href={'/order'}>Замовити</Link>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthyFeetIntroShort