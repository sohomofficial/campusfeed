import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'

const NavBar = () => {
  const navLinks = ['Home', 'Events', 'Features', 'About', 'Contact Us']
  return (
    <nav className="p-4 md:w-[95%] lg:w-[90%] md:mx-auto flex items-center justify-between">
      <a href="/">
        <Image
          src={'/navlogo.svg'}
          width={153}
          height={40}
          alt="Logo"
          className="w-[153px] h-[40px] md:w-[203px] md:h-[35px] cursor-pointer"
        />
      </a>
      <div className="hidden lg:flex bg-[#ABBEC9] bg-opacity-50 px-2 py-1 rounded-xl items-center justify-between min-w-fit gap-1 lg:gap-3">
        {navLinks.map((item) => (
          <Link
            key={item}
            href={`${item !== 'Home' ? `/${item.toLowerCase()}` : '/'}`}
            className="py-1 px-2 hover:bg-[#ABBEC9] hover:bg-opacity-90 rounded-md transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
      <button className="bg-[#6DA27D] ml-4 rounded-lg py-2 px-4 text-white hover:scale-105 hover:shadow-lg transition-all duration-200 hidden lg:block">
        Register
      </button>
      <HamburgerMenu navLinks={navLinks} />
    </nav>
  )
}

export default NavBar
