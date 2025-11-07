import './App.css'
import { Features } from './components/features'
import { Forms } from './components/forms'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Productive } from './components/productive'
import { Testimonials } from './components/testimonials'

function App() {

  return (
    <main className='w-[375px] m-auto border border-White'>
      
      <section className='h-[420px] bg-Navy-850 p-6 relative'>
        <Header/>
        <img className="relative z-1 mt-8" src="/images/illustration-intro.png" alt="illustration intro" />
        <img className="absolute bottom-0 left-0" src="/images/bg-curvy-mobile.svg" alt="curvy mobile" />
      </section>
      
      <section className='bg-Navy-900'>
        <Hero/>
        <Features/>
        <Productive/>
        <Testimonials/>
      </section>

      <section className='bg-Navy-950 relative'>
        <Forms/>
      </section>


    </main>
  )
}

export default App
