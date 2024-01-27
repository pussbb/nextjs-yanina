import { Metadata } from 'next';

const defaultTitle = 'Яніна Попеско. Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день'
//
const generateDefaultMetadata = (title: string = defaultTitle): Metadata => ({
    metadataBase: new URL('https://yaninapopesko.com.ua/'),
    title: title,
    publisher: title,
    creator: title,
    //viewport: 'width=device-width, initial-scale=1',
    robots:  { index: true, follow: true },
    applicationName: title,
    openGraph: {
        title: title,
        description: 'Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день',
        siteName: 'Яніна Попеско',
        locale: 'uk_UA',
        countryName: 'Ukraine'
    },
    keywords: [
        'Здорова стопа',
        'онлайн курс',
        'вальгус',
        'плоскостопість',
        'лікування плоскостопість',
        'вальгусна деформація',
        'лікування вальгусної деформації',
        'плоскостопість у дітей',
        'лікування плоскостопість у дітей',
        'вправи для дітей',
        'лікування для дітей',
        'вправи для дітей з вальгусною деформацією',
        'лікування для дітей з вальгусною деформацією',
        'вправи для дітей з плоскостопістю',
        'лікування для дітей з плоскостопістю',
        'лікувальні вправи для дітей з плоскостопістю',
        'дитині 4 роки',
        'дитині 7 років',
        '7 років',
        'для дітей 4 роки',
        'для дітей 7 років',
        'діти 4 роки',
        'нервова система дитини',
        '3 роки дитині',
        'біль в ногах у дитини',
        'біль у ногах у дитини',
        'дитині 3 роки',
        'для дітей 3 роки',
        'здорова дитина',
        'вправи для дитини 5 місяців',
        'дитині місяць',
        'дитина 3 роки',
        'дитина в 3 роки',
        'вправи для дитини 4 місяці',
        'один місяць дитині',
        'дитина в місяць',
        '4 місяців дитині',
        'дитина 5 тижнів',
        'дитина в 5 тижнів',
        'дитина у 5 тижнів',
        'вправи для осанки дітей',
        'вправи для постави дітей',
        'у дитини',
        'активна дитина',
        'все про дітей',
        'гімнастика діти',
        'гімнастіка для дітей',
        'правила дитини',
        'підтримка дитини',
    ],
    description: 'Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день',
    manifest: '/manifest.json',
})

export default generateDefaultMetadata;
