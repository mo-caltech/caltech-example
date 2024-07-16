import React from 'react'
import Image from 'next/image'
import teamhero from '@/src/team-hero.jpg'
import { ContactForm } from '@/components/contact-form'
import SEO from '@/components/seo'
const Contact = () => {
  return (
    <>
        <SEO/>
        <ContactForm/>
    </>
  )
}

export default Contact