import type { Metadata } from 'next'

import "@/styles/style.scss";

import { Poppins } from 'next/font/google';
import React from 'react';
import Header from '@/app/Sections/Main/Header';
import Footer from '@/app/Sections/Main/Footer';
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata: Metadata = {
    metadataBase: new URL('https://yaninapopesko.com.ua/'),
    title: 'Яніна Попеско',
    //viewport: 'width=device-width, initial-scale=1',
    robots:  { index: true, follow: false },
    applicationName: 'Яніна Попеско',
    openGraph: {
        title: 'Яніна Попеско',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        {children}
      <Footer />
      </body>
      <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-H017NPVR7Z');
        `}
      </Script>
      <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-H017NPVR7Z" />
    </html>
  )
}
