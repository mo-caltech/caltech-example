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
      <section className="relative w-full h-[80vh] min-h-[600px] bg-muted overflow-hidden px-4 py-8 md:p-32">
        <div className="z-0">
          <Image unoptimized quality={100} src={teamhero} alt="Formula SAE Race Car" layout="fill" className="brightness-50 saturate-0 object-cover object-center w-full h-full" />
        </div>
        <div className="relative z-10 container h-full flex items-center justify-center w-full">
          <div className="max-w-4xl text-center space-y-6 w-full">
            <h1 className="font-bold text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl">Shaping the Future of Racing</h1>
            <p className="text-white text-lg sm:text-xl font-medium w-full">
              We are CalTech’s Formula SAE team. Our student-run group designs, builds, and races high-performance autocross cars, competing globally to showcase our engineering excellence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sponsor Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
             Join The Team <span aria-hidden="true">→</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      

      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Our Sponsors
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
              We are a team of passionate designers and developers, dedicated to creating beautiful and functional
              digital experiences. Our mission is to help businesses and individuals achieve their goals through
              innovative technology solutions.
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
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
          </div>
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
      <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
              molestiae velit error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our team <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src={c}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt=""
                  src={a}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src={b}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src={f}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
            Ready to Race?
            <br />

          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join us on our mission to build the next generation of racing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sponsor Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
             Join The Team <span aria-hidden="true">→</span>
            </a>
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
  )
}

