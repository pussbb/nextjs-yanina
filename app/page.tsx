import Link from 'next/link';
import Image from 'next/image';
import YaninaInfoSection from '@/app/Sections/YaninaInfoSection';
import GreenCheck from '@/app/components/GreenCheck';
import HealthyFeetPrices from '@/app/Sections/HealthyFeet/HealthyFeetPrices';
import HealthyFeetInfo from '@/app/Sections/HealthyFeet/HealthyFeetInfo';


export default function Home() {
  return (
    <main className="main-page flex min-h-screen flex-col justify-between p-1">
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">
                Онлайн курс «Здорова стопа»
              </h1>
              <h3> для дітей 4-12 років</h3>
              <p className="mt-4">
                  Старт: 12 грудня.<br/>
                  <Link className="btn btn-primary mt-4" href={'/order'}>Замовити</Link>
                  <br/>
                  <Image
                      className="mx-auto"
                      src={'/imgs/banner.png'}
                      width={550}
                      height={1284}
                      alt="logo image"
                      style={{marginTop: '-10px'}}
                      priority
                  />
                  <br/><br/>
              </p>
                <h5>Виправляємо вальгус і плоскостопість за 20 хвилин на день.</h5>
                <br/>
            </div>
          </div>
        </div>
      </section>
        {/* Features */}
        <section className="section bg-theme-light">
            <div className="container">
                <div className="text-center">
                    <h2 className={'specialh2'}>Для кого підходить?</h2>
                    <h3> Дітям від 4 до 12 років які мають:</h3>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
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
                            className="feature-card rounded-xl bg-white  p-1 pb-2 text-center"
                            key={`feature-${i}`}
                        >
                            <p className="font-bold">
                                <Image
                                    className="mx-auto"
                                    src={'/images/checkmark-circle.svg'}
                                    width={16}
                                    height={16}
                                    alt=""
                                />
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

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
                            alt=""
                        />
                    </div>
                    {/* Content */}
                    <div className={`service-content mt-5 md:mt-0 md:order-1`}>
                        <h2 className="thisCourse font-bold leading-[40px]">
                            Цей курс для вас, <span >якщо:</span>
                        </h2>
                        <div className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Хочете щоб Ваша дитина виросла здоровою, кріпкою, підтянутою, з хорошою координацією і легкою ходою.',
                                        'Шукаєте єфективні вправи, щоб дитина забула про біль у ногах, не сильно втомлювалася і могла займатися з успіхом будь-якою активністі.',
                                        'Бажаєте привчити дитину займатися собою та створити фундамент здорового майбутнього'
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}><GreenCheck />{item}</li>)
                                    )
                                }
                            </ul>

                        </div>
                            <Link
                                href={'/order'}
                                className="cta-link inline-flex items-center text-primary"
                            >
                                Замовити
                                <Image
                                    className="ml-1"
                                    src="/images/arrow-right.svg"
                                    width={18}
                                    height={14}
                                    alt="arrow"
                                />
                            </Link>
                    </div>
                </div>
            </div>
        </section>

        <YaninaInfoSection />

        <HealthyFeetPrices />

        <HealthyFeetInfo />

    </main>
  )
}
