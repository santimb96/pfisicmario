import Footer from '@/components/footer'
import Header from '@/components/headerComponents/header'
import { ViewTransitions } from 'next-view-transitions'
import ScrollToTop from './components/scrollToTop'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className='flex flex-col items-center justify-start relative'>
          <Header />
          <section className='w-full md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] flex flex-col items-start gap-5 px-2.5 md:px-0 mb-5'>
            {children}
          </section>
          <ScrollToTop />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  )
}
