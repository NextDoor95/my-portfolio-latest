import { Inter } from 'next/font/google'
import './globals.scss'
import Script from 'next/script'

import Particle from '../../components/Particle/particle'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextdoor portfolio',
  description: 'Portfolio generated by Nextdoor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JEMEEXN04C"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JEMEEXN04C');
        `}
      </Script>
      <body className={inter.className}>
        <Particle/>
        <Navbar/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
