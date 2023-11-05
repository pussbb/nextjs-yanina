import { Metadata } from 'next';

//
const generateDefaultMetadata = (title: string = 'Яніна Попеско'): Metadata => ({
    metadataBase: new URL('https://yaninapopesko.com.ua/'),
    title: title,
    //viewport: 'width=device-width, initial-scale=1',
    robots:  { index: true, follow: false },
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
        'вальгусна деформація',
        'плоскостопість у дітей',
        'вправи для дітей',
        'вправи для дітей з вальгусною деформацією',
        'вправи для дітей з плоскостопістю',
    ],
    description: 'Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день',
    manifest: '/manifest.json',
})

export default generateDefaultMetadata;
