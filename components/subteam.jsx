
import Link from "next/link"
import teamhero from '@/src/team-hero.jpg'
import Image from "next/image"

import electric from '@/src/img/electric.png'
import suspension from '@/src/img/suspension.png'
import drivetrain from '@/src/img/drivetrain.png'
import aero from '@/src/img/aero.png'
import chasis from '@/src/img/b.png'
import ergonomics from '@/src/img/ergo.jpg'
import business from '@/src/img/business.jpg'







export function Subteam() {
  const handleIconClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    (<div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[40vh] min-h-[300px] bg-muted overflow-hidden px-4 py-4 md:p-32">
        <div className="z-0">
          <Image unoptimized quality={100} src={teamhero} alt="Formula SAE Race Car" layout="fill" className="brightness-50 saturate-0 object-cover object-center w-full h-full" />
        </div>
        <div className="relative z-10 container h-full flex items-center justify-center w-full">
          <div className="max-w-4xl text-center space-y-6 w-full">
            <h1 className="font-bold text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl">Shaping the Future of Racing</h1>
            <p className="text-white text-lg sm:text-xl font-medium w-full">
              We are CalTech’s Formula SAE team. Our student-run group designs, builds, and races high-performance autocross cars, competing globally to showcase our engineering excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-12 mt-">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovate, Design, Compete.            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of passionate designers and developers, dedicated to creating beautiful and functional
              digital experiences. Our mission is to help businesses and individuals achieve their goals through
              innovative technology solutions.
            </p>
          </div>
        </div>
        <div
          className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 px-4 md:px-6 mt-8">
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("suspension")}
            prefetch={false}>
            <ShieldIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("suspension")} />
            <span className="text-sm font-medium">Suspension</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("drivetrain")}
            prefetch={false}>
            <PowerIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("drivetrain")} />
            <span className="text-sm font-medium">Drivetrain</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("aero")}
            prefetch={false}>
            <WindIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("aero")} />
            <span className="text-sm font-medium">Aero</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("chassis")}
            prefetch={false}>
            <CuboidIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("chassis")} />
            <span className="text-sm font-medium">Chassis</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("ergonomics")}
            prefetch={false}>
            <UserIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("ergonomics")} />
            <span className="text-sm font-medium">Ergonomics</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("electrical")}
            prefetch={false}>
            <BoltIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("electrical")} />
            <span className="text-sm font-medium">Electrical</span>
          </Link>
          <Link
            href="#"
            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-muted p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={() => handleIconClick("business")}
            prefetch={false}>
            <BriefcaseIcon
              className="w-8 h-8 text-muted-foreground group-hover:text-accent-foreground cursor-pointer"
              onClick={() => handleIconClick("business")} />
            <span className="text-sm font-medium">Business</span>
          </Link>
        </div>
      </section>
      <section id="suspension" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <Image
            src={suspension}
            width="550"
            height="310"
            alt="Suspension"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Suspension</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Suspension team is responsible for designing and building the vehicle's suspension system, ensuring a
              smooth and stable ride.
            </p>
          </div>
        </div>
      </section>
      <section id="drivetrain" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Drivetrain</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Drivetrain team focuses on the design and development of the vehicle's powertrain, including the
              motor, gearbox, and differential.
            </p>
          </div>
          <Image
            src={drivetrain}
            width="550"
            height="310"
            alt="Drivetrain"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
        </div>
      </section>
      <section id="aero" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <Image
            src={aero}
            width="550"
            height="310"
            alt="Aero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Aero</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Aero team is responsible for designing and optimizing the vehicle's aerodynamic components, such as
              the front wing, rear wing, and diffuser.
            </p>
          </div>
        </div>
      </section>
      <section id="chassis" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Chassis</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Chassis team is responsible for the design and construction of the vehicle's frame, ensuring it is
              lightweight, strong, and able to withstand the rigors of racing.
            </p>
          </div>
          <Image
            src={chasis}
            width="550"
            height="310"
            alt="Chassis"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
        </div>
      </section>
      <section id="ergonomics" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <Image
            src={ergonomics}
            width="550"
            height="310"
            alt="Ergonomics"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ergonomics</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Ergonomics team focuses on the driver's comfort and safety, designing the seating position, controls,
              and other features to optimize the driver's experience.
            </p>
          </div>
        </div>
      </section>
      <section id="electrical" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Electrical</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Electrical team is responsible for the design and implementation of the vehicle's electrical systems,
              including the battery, motor controllers, and other electronic components.
            </p>
          </div>
          <Image
            src={electric}
            width="550"
            height="310"
            alt="Electrical"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
        </div>
      </section>
      <section id="business" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <Image
            src={business}
            width="550"
            height="310"
            alt="Business"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Business</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Business team is responsible for the team's marketing, sponsorship, and fundraising efforts, ensuring
              the team has the resources it needs to succeed.
            </p>
          </div>
        </div>
      </section>
    </div>)
  );
}

function BoltIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function CuboidIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function PowerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>)
  );
}


function ShieldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function WindIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
