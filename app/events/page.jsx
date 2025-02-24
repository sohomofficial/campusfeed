'use client'
import EventCard from '@/components/fragments/EventCard'
import NavBar from '@/components/fragments/NavBar'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const events = [
  {
    eventPoster: 'EventDemo1.svg',
    eventName: 'KODESPHERE - The Flagship Event',
    eventLocation: 'Campus-13',
    eventDate: 'Sat-25-Mar',
    eventPrice: 200.0,
  },
  {
    eventPoster: 'EventDemo2.svg',
    eventName: 'SPOTLIGHT - The Flagship Event',
    eventLocation: 'Campus-14',
    eventDate: 'Sat-25-Mar',
    eventPrice: 300.0,
  },
  {
    eventPoster: 'EventDemo3.svg',
    eventName: 'STEP IT UP - The Flagship Event',
    eventLocation: 'Campus-15',
    eventDate: 'Sat-25-Mar',
    eventPrice: 400.0,
  },
  {
    eventPoster: 'EventDemo1.svg',
    eventName: 'KODESPHERE - The Flagship Event',
    eventLocation: 'Campus-13',
    eventDate: 'Sat-25-Mar',
    eventPrice: 200.0,
  },
  {
    eventPoster: 'EventDemo2.svg',
    eventName: 'SPOTLIGHT - The Flagship Event',
    eventLocation: 'Campus-14',
    eventDate: 'Sat-25-Mar',
    eventPrice: 300.0,
  },
  {
    eventPoster: 'EventDemo3.svg',
    eventName: 'STEP IT UP - The Flagship Event',
    eventLocation: 'Campus-15',
    eventDate: 'Sat-25-Mar',
    eventPrice: 400.0,
  },
  {
    eventPoster: 'EventDemo1.svg',
    eventName: 'KODESPHERE - The Flagship Event',
    eventLocation: 'Campus-13',
    eventDate: 'Sat-25-Mar',
    eventPrice: 200.0,
  },
  {
    eventPoster: 'EventDemo2.svg',
    eventName: 'SPOTLIGHT - The Flagship Event',
    eventLocation: 'Campus-14',
    eventDate: 'Sat-25-Mar',
    eventPrice: 300.0,
  },
  {
    eventPoster: 'EventDemo3.svg',
    eventName: 'STEP IT UP - The Flagship Event',
    eventLocation: 'Campus-15',
    eventDate: 'Sat-25-Mar',
    eventPrice: 400.0,
  },
  {
    eventPoster: 'EventDemo1.svg',
    eventName: 'KODESPHERE - The Flagship Event',
    eventLocation: 'Campus-13',
    eventDate: 'Sat-25-Mar',
    eventPrice: 200.0,
  },
  {
    eventPoster: 'EventDemo2.svg',
    eventName: 'SPOTLIGHT - The Flagship Event',
    eventLocation: 'Campus-14',
    eventDate: 'Sat-25-Mar',
    eventPrice: 300.0,
  },
  {
    eventPoster: 'EventDemo3.svg',
    eventName: 'STEP IT UP - The Flagship Event',
    eventLocation: 'Campus-15',
    eventDate: 'Sat-25-Mar',
    eventPrice: 400.0,
  },
]

export default function Home() {
  const [search, setSearch] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  return (
    <>
      <NavBar />
      <section className="px-4 lg:px-0 py-5 md:w-[80%] lg:w-[75%] mx-auto max-w-6xl relative">
        <header className="flex justify-between items-center">
          <p className="text-[40px]">Events</p>
          <div className="gap-2 text-sm hidden md:flex items-center z-10">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setFilterOpen(!filterOpen)
                  setSortOpen(false)
                }}
                className="bg-[#6DA27D] rounded-md p-2 text-white"
              >
                Filter{' '}
                <Image
                  src={'Dropdown.svg'}
                  alt={'Dropdown'}
                  width={10}
                  height={10}
                  className="inline"
                ></Image>
              </button>
              <AnimatePresence>
                {filterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white shadow-lg rounded-md p-3 w-40 mt-1"
                  >
                    <p className="text-sm font-semibold">Filter By:</p>
                    <ul className="mt-1 space-y-2">
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Price
                      </li>
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Location
                      </li>
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Date
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setSortOpen(!sortOpen)
                  setFilterOpen(false)
                }}
                className="bg-[#6DA27D] rounded-md p-2 text-white"
              >
                Sort By{' '}
                <Image
                  src={'Dropdown.svg'}
                  alt={'Dropdown'}
                  width={10}
                  height={10}
                  className="inline"
                ></Image>
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white shadow-lg rounded-md p-3 w-40 mt-1"
                  >
                    <p className="text-sm font-semibold">Sort By:</p>
                    <ul className="mt-1 space-y-2">
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Price: Low to High
                      </li>
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Price: High to Low
                      </li>
                      <li className="hover:bg-gray-100 p-1 rounded-md cursor-pointer">
                        Date: Newest First
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar */}
            <div className="flex gap-1 items-center bg-[#D3DEE3] px-3 py-2 rounded-md min-w-[250px]">
              <input
                placeholder="Search for something.."
                type="text"
                className="bg-transparent pr-3 rounded-md placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none w-[95%]"
              />
              <Image
                src={'/SearchIcon.svg'}
                height={20}
                width={20}
                alt="search"
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <AnimatePresence mode="wait">
            {!search ? (
              <motion.div
                initial={{ opacity: 0, width: '60%' }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: '60%' }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="rounded-full bg-[#D3DEE3] p-2 md:hidden"
              >
                <Image
                  src={'/SearchIcon.svg'}
                  height={20}
                  width={20}
                  alt="search"
                  onClick={() => setSearch(!search)}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '60%' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="flex items-center justify-between pr-2 md:hidden bg-[#D3DEE3] border-2 rounded-2xl overflow-hidden"
              >
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  placeholder="Search "
                  type="text"
                  className="bg-transparent py-1 pl-3 placeholder:text-black/45 placeholder:text-sm placeholder:font-light focus:outline-none min-w-[85%]"
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setSearch(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        {/* Event Cards */}
        <div className="mt-3 2xl:mt-6 px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-10 relative">
          <div className="fixed w-[20%] h-[40%]  bg-[#b9eec966] blur-2xl rounded-full -z-10 -left-[2%] top-[40%] pointer-events-none"></div>
          <div className="fixed w-[20%] h-[40%] bg-[#b9eec966] blur-2xl rounded-full -z-10 -right-[5%] top-[20%] pointer-events-none"></div>

          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </section>
    </>
  )
}
