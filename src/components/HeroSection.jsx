import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero"
      className='relative min-h-screen flex flex-col items-center justify-center px-4 '
    >
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6 '>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I’m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Kanishk</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Negi</span>
            <div className="mt-4 opacity-0 animate-fade-in-delay-3">
              <span className="block text-xl md:text-2xl text-muted-foreground">
                Frontend Developer • Building Modern Web Experiences 🚀
              </span>
            </div>
          </h1>


          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I specialize in creating fast, responsive, and visually stunning web apps
            using <span className="font-semibold text-primary">React</span> and
            <span className="font-semibold text-primary"> TailwindCSS</span>.
            My goal is to craft experiences that users love and businesses trust.
          </p>


          <div className=' pt-4 opacity-0 animate-fade-in-delay-4'>
            <a href="#projects" className="cosmic-button flex items-center gap-2">
              View My Work <ArrowDown className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-ceneter animate-bounce '>
        <span className='relative right-2 text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary ' />
      </div>
    </section>
  )
}

export default HeroSection