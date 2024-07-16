'use client'
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

import teamhero from '@/src/team-hero.jpg'
import alpinestarsLogo from '@/src/sponsors/Alpinestars-Logo.png'
import altiumLogo from '@/src/sponsors/Altium_Logo.svg.png'
import ansysLogo from '@/src/sponsors/Ansys.png'
import caltechMceLogo from '@/src/sponsors/caltech mce.png'
import caltechLogo from '@/src/sponsors/Caltech_logo_2014.png'
import dassaultLogo from '@/src/sponsors/Dassault-Syst-mes-Logo.png'
import haasLogo from '@/src/sponsors/Logo_Haas_F1.png'

import a from '@/src/img/a.jpg'
import b from '@/src/img/b.png'
import c from '@/src/img/c.jpg'
import d from '@/src/img/d.png'
import e from '@/src/img/e.jpg'
import f from '@/src/img/f.jpg'
import g from '@/src/img/g.jpg'
import h from '@/src/img/h.jpg'





export default function Home() {
  return (
    <div>
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden px-4 py-8 md:p-8">
  <div className="relative w-full h-full bg-white rounded-lg shadow-lg">
    <div className="z-0">
      <Image unoptimized quality={100} src={teamhero} alt="Formula SAE Race Car" layout="fill" className="brightness-50 saturate-0 object-cover object-center w-full h-full rounded-lg" />
    </div>
    <div className="relative z-10 container h-full flex items-center justify-center w-full">
      <div className="max-w-4xl text-center space-y-6 w-full">
        <h1 className="font-bold text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl">Shaping the Future of Racing</h1>
        <p className="text-white text-lg sm:text-xl font-medium w-full">
          We are CalTech’s Formula SAE team. Our student-run group designs, builds, and races high-performance autocross cars, competing globally to showcase our engineering excellence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/sponsor-us"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sponsor Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
            Join The Team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      

      <div className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-medium leading-8 text-gray-900">
            Proudly Backed By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            <div className="relative h-16 w-24">
              <Image
                alt="Alpinestars"
                src={alpinestarsLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Altium"
                src={altiumLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Ansys"
                src={ansysLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Caltech MCE"
                src={caltechMceLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Caltech"
                src={caltechLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Dassault Systèmes"
                src={dassaultLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                alt="Haas"
                src={haasLogo}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovate, Design, Compete.            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are a Formula SAE team of passionate students designing, building, and racing high-performance cars. 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              src={e}
              width={400}
              height={300}
              alt="Team"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Our Team</h3>
                <p className="text-sm">Meet the people behind the magic.</p>
              </div>
            </div>
          </div>
          <Link className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl" href="/subteams">
            <Image
              src={g}
              width={400}
              height={300}
              alt="Workspace"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Subteams</h3>
                <p className="text-sm">It takes a multi-disciplinary team to build a race car.</p>
              </div>
            </div>
          </Link>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              src={h}
              width={400}
              height={300}
              alt="Our Sponsors"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Our Sponsors</h3>
                <p className="text-sm">The organizations and people that make what we do possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="overflow-hidden bg-white py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid max-w-2xl gap-x-12 gap-y-16 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
      <div className="lg:col-span-1 lg:w-full lg:max-w-lg lg:pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
        <p className="mt-6 text-xl leading-8 text-gray-600">
        Formula SAE challenges us with real-world constraints, applying engineering principles in aerodynamics, thermodynamics, electrical systems, and drivetrain/suspension design. We solve technical problems, manage budgets, and handle marketing/PR.</p>
        <p className="mt-6 text-base leading-7 text-gray-600">
        Caltech Racing is open to all majors and years. While most members are engineers, we welcome everyone! By applying classroom theories to real-world problems, Caltech’s Formula SAE produces some of the most talented and sought-after graduates.
        </p>
        <div className="mt-10 flex">
          <Link
            href="/contact"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join our team <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:col-span-1 lg:grid-cols-2">
        <div className="flex justify-end">
          <Image
            alt=""
            src={c}
            className="aspect-[7/5] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
        <div className="flex justify-end">
          <Image
            alt=""
            src={a}
            className="aspect-[4/3] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
        <div className="flex justify-end">
          <Image
            alt=""
            src={b}
            className="aspect-[7/5] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            alt=""
            src={f}
            className="aspect-[4/3] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    

    <div className=" p-8 md:p-24">
    <div className="relative isolate overflow-hidden bg-gray-900 rounded-lg">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to Race?
  

          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join us on our mission to build the next generation of racing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/sponsor-us"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sponsor Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
            Join The Team <span aria-hidden="true">→</span>
          </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
      </div>
  
    </div>
  )
}

