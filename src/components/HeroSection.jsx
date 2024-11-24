import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { auth } from '../../auth'

const HeroSection = async () => {
  const session = await auth()

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-5 md:py-20 md:flex-row flex-col items-center">
          <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font lg:text-3xl text-[20px] mb-5 font-medium text-gray-900">
              Patient Management System
              <br className="hidden lg:inline-block" />
              By Muhammad Asad
            </h1>
            <p className="mb-5 leading-relaxed text-sm lg:text-[18px]">
              Streamline your healthcare experience with our Patient Management System. Manage appointments, track medical records, and ensure seamless communication between patients and healthcare providers. Designed to enhance efficiency and improve patient care, all in one user-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button className="px-4 py-2 text-sm sm:w-auto w-full">
                Find Doctor You Need
              </Button>
              <Link href={session ? '/doctors/apply' : '/signin'}>
                <Button variant="outline" className="px-4 py-2 text-sm sm:w-auto w-full">
                  Apply as Doctor
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default HeroSection
