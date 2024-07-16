import React from 'react'
import Image from 'next/image'
import teamhero from '@/src/team-hero.jpg'
import { SponsorForm } from '@/components/sponsor-form'
const Contact = () => {
  return (
    <div>
           <section className="relative w-full h-[30vh] min-h-[300px] bg-muted overflow-hidden px-4 py-4 md:p-32">
        <div className="z-0">
          <Image unoptimized quality={100} src={teamhero} alt="Formula SAE Race Car" layout="fill" className="brightness-50 saturate-0 object-cover object-center w-full h-full" />
        </div>
        <div className="relative z-10 container h-full flex items-center justify-center w-full">
          <div className="max-w-4xl text-center space-y-6 w-full">
            <h1 className="font-bold text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl">Sponsor Us</h1>
            <p className="text-white text-lg sm:text-xl font-medium w-full">
            Have a question or want to get in touch with our Formula SAE team? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
        <SponsorForm/>
    </div>
  )
}

export default Contact