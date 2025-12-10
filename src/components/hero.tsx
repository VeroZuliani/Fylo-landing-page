import { Button } from "./button"


export const Hero = () => {
  return (
    <section className="relative z-1 md:-mt-40 md:max-w-[500px] md:mx-auto">

      <div className="text-center">
        <h1 className="font-semibold text-2xl font-Raleway px-8">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-sm mt-6 px-9">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
      </div>

      <div className="text-center mt-6">
        <Button text="Get Started" styles="w-[240px]"/> 
      </div>
    
    </section>
  )
}
