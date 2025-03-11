import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg';
import Nav from './Nav.jsx';
import NavMobile from './NavMobile.jsx';
import NavMobileBtn from './NavMobileBtn.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleScroll() {
    setScrolled(window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-slate-950 shadow-sm shadow-slate-800'
            : 'bg-transparent'
        }`}
      >
        <div className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <div className={'flex items-center justify-between h-16'}>
            <a href={'/'} className={'flex items-center gap-2'}>
              <img
                src={logo}
                alt={'Henna Software logo. A white mug spilling brown coffee.'}
                className={'w-16 xl:hidden'}
              />
              <h1
                className={
                  'font-medium italic text-italic text-2xl transition-all hover:text-blue-500'
                }
              >
                Henna Software{' '}
              </h1>
            </a>

            <div className={'flex items-center md:hidden'}>
              <NavMobileBtn toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>

            <Nav />
          </div>

          <NavMobile isMenuOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}

export default Header;
