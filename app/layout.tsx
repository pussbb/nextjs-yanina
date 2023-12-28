
import "@/styles/style.scss";

import { Poppins } from 'next/font/google';
import React from 'react';
import Header from '@/app/Sections/Main/Header';
import Footer from '@/app/Sections/Main/Footer';
import Script from 'next/script';
import { Metadata } from 'next';
import generateDefaultMetadata from '@/app/metadata';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const isDev = process.env.NODE_ENV === 'development';
export const metadata: Metadata = generateDefaultMetadata();


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk-UA">
      <body className={poppins.className}>
      <Header />
        {children}
      <Footer />
      </body>
      {
          !isDev && (
              <>
                  <Script id="google-analytics">
                      {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-H017NPVR7Z');
                      `}
                  </Script>
                  <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-H017NPVR7Z" />
              </>
          )
      }
    </html>
  )
}


