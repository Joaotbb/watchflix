import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '_assets/images/logo.svg'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        document.body.style.overflow = 'auto'
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <nav className='bg-transparent'>
      <div className='flex items-center justify-between px-4 py-2 md:px-6'>
        {/* LOGO */}
        <div>
          <a
            href='/'
            className='flex-shrink-0 flex'
          >
            <img
              className='h-10 w-10 text-primary-500'
              src={Logo}
              alt='Logo'
            />
          </a>
        </div>

        {/* HAMBURGER MENU */}
        <div className='md:hidden'>
          <button
            type='button'
            className='block text-gray-200 hover:text-secondary-700 focus:text-secondary-700 focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='h-6 w-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M19 5h-14v-2h14v2zm0 6h-14v-2h14v2zm0 6h-14v-2h14v2z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4 5h16v2h-16v-2zm0 6h16v2h-16v-2zm0 6h16v2h-16v-2z'
                />
              )}
            </svg>
          </button>
        </div>

        {/* LIST */}
        <div
          ref={menuRef}
          className={`md:flex ${
            isMenuOpen
              ? 'fixed bg-white text-center rounded-xl left-1/2 transform -translate-x-1/2 top-20 p-12 w-11/12 h-3/5 md:relative md:bg-transparent md:p-0 flex flex-col justify-center z-50'
              : 'hidden'
          }`}
        >
          <ul className='gap-4 md:flex md:space-x-8 md:space-y-0 space-y-3'>
            <li>
              <Link
                to='/'
                className='nav-list'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/series'
                className='nav-list'
              >
                Series
              </Link>
            </li>
            <li>
              <Link
                to='/watchlist'
                className='nav-list'
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                to='/contacts'
                className='nav-list'
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
