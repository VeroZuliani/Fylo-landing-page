import { Features } from './components/features'
import { Footer } from './components/footer'
import { Forms } from './components/forms'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Productive } from './components/productive'
import { Testimonials } from './components/testimonials'

function App() {

  return (
    <main className='m-auto'>
      
      <section className='h-[420px] bg-Navy-850 p-6 relative md:h-[800px]'>
        <Header/>
        <img className="relative z-1 mt-8 mx-auto" src="/images/illustration-intro.png" alt="illustration intro" />
        <img className="absolute bottom-0 left-0 w-full xl:hidden" src="/images/bg-curvy-mobile.svg" alt="curvy mobile" />
        <img className="absolute bottom-0 left-0 w-full hidden xl:block" src="/images/bg-curvy-desktop.svg" alt="curvy desktop" />
      </section>
      
      <section className='bg-Navy-900'>
        <Hero/>
        <Features/>
        <Productive/>
        <Testimonials/>
      </section>

      <section className='bg-Navy-950 relative'>
        <Forms/>
        <Footer/>
      </section>


    </main>
  )
}

export default App
