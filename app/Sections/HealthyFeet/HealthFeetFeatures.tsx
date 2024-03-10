import Image from "next/image";

const HealthFeetFeatures = () => {
    return (
        <section className="section bg-theme-light">
            <div className="container">
                <div className="text-center">
                    <h2 className={'specialh2'}>Для кого підходить?</h2>
                    <h3> Дітям від 4 до 12 років які мають:</h3>
                </div>
                <div className="mt-8 grid gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        'плоскостопість 1-2 ступеня',
                        'вальгус 1-2 ступеня',
                        'косолапа хода',
                        'ходьба на півпальцях',
                        'важка хода',
                        'шльопаюча хода',
                        'скаржиться на біль у ногах',
                        'швидко втомлюється після довгих прогулянок'
                    ].map((item, i) => (
                        <div
                            className="feature-card rounded-xl bg-white p-1 pb-2 text-left flex items-center"
                            key={`feature-${i}`}
                        >
                            <Image
                                className="mx-2"
                                src={'/images/checkmark-circle.svg'}
                                width={16}
                                height={16}
                                loading={'lazy'}
                                alt=""
                            />
                            <div className="font-bold">

                                {item}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HealthFeetFeatures;