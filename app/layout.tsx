import type { Metadata } from 'next'

import "@/styles/style.scss";

import { Poppins } from 'next/font/google';
import React from 'react';
import Header from '@/app/Sections/Main/Header';
import Footer from '@/app/Sections/Main/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata: Metadata = {
    title: 'Yanina Popesko',
    description: 'Онлайн курс «Здорова стопа» для дітей 4-12 років Виправляємо вальгус і плоскостопість за 20 хвилин на день',
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
    </html>
  )
}
