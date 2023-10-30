import Link from 'next/link';
import Image from 'next/image';
import YaninaInfoSection from '@/app/Sections/YaninaInfoSection';
import GreenCheck from '@/app/components/GreenCheck';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">

      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">
                Онлайн курс «Здорова стопа» для дітей 4-12 років
              </h1>
              <p className="mt-4">
                Виправляємо вальгус і плоскостопість за 20 хвилин на день.<br/>
                Старт: 7 листопада.<br/>
              </p>
                  <Link
                      className="btn btn-primary mt-4"
                      href={'/order'}
                  >
                    Замовити
                  </Link>
              <Image
                  className="mx-auto mt-12"
                  src={'/images/logo.svg'}
                  width={750}
                  height={390}
                  alt="logo image"
                  priority
              />
            </div>
          </div>
        </div>
      </section>
        {/* Features */}
        <section className="section bg-theme-light">
            <div className="container">
                <div className="text-center">
                    <h2>
                        Для кого підходить?<br/>
                        Дітям від 4 до 12 років які мають:
                    </h2>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        'плоскостопість 1-2 ступеня',
                        'вальгус 1-2 ступеня',
                        'косолапа хода',
                        'ходьба на півпальцях',
                        'важка хода',
                        'шльопаюча хода',
                        'скаржиться на біль у ногах, швидко втомлюється після довгих прогулянок, незграбний'
                    ].map((item, i) => (
                        <div
                            className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                            key={`feature-${i}`}
                        >
                            <Image
                                className="mx-auto"
                                src={'/images/checkmark-circle.svg'}
                                width={30}
                                height={30}
                                alt=""
                            />
                            <div className="mt-4">
                                <p className="font-bold">{item}</p>
                            </div>
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
                                зображення
                    </div>
                    {/* Content */}
                    <div
                        className={`service-content mt-5 md:mt-0 md:order-1`}
                    >
                        <h2 className="font-bold leading-[40px]">
                            Цех курс для вас, якщо:
                        </h2>
                        <p className="mt-4 mb-2">
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside'>
                                {
                                    [
                                        'Хочете щоб Ваша дитина виросла здоровою, кріпкоюб підтянутою, з хорошою координацією і легкою походкою.',
                                        'Шукаєте єфективні вправи, щоб дитина забула про біль у ногах, не сильно втомлювалася і могла займатися з успіхом будь-якою активністі.',
                                        'Бажаєте привчити дитину займатися собою та створити фундамент здорового майбутнього'
                                    ].map((item, index) =>
                                        (<li key={`yanina-infoindex-${index}`} className={'flex items-center'}><GreenCheck />{item}</li>)
                                    )
                                }
                            </ul>

                        </p>
                            <Link
                                href={''}
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

    </main>
  )
}
