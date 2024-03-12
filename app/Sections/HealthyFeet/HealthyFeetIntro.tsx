import Image from "next/image";
import Link from "next/link";

const HealthyFeetIntro = () => {
    return (
        <section className="section pb-[50px]">
            <div className="container">
                <div className="row text-center">
                    <div className="mx-auto lg:col-10">
                        <h1 className="font-primary font-bold">
                            Онлайн курс «Здорова стопа»
                        </h1>
                        <h3> для дітей 4-12 років</h3>
                        <p className="mt-4">
                            <Link className="btn btn-primary mt-4 " href={'/order'}>Замовити</Link>
                            <br/>
                            <Image
                                className="mx-auto"
                                src={'/imgs/banner.png'}
                                width={550}
                                height={1284}
                                alt="logo image"
                                loading={'lazy'}
                                style={{marginTop: '-10px'}}
                            />
                            <br/><br/>
                        </p>
                        <h5>Виправляємо вальгус і плоскостопість за 20 хвилин на день.</h5>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthyFeetIntro