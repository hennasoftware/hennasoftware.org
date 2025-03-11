function NavMobile(props) {
  return (
    <>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${props.isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className={'space-y-2 px-2 pt-2 pb-3 text-xl'}>
          <li>
            <a href={'/'} className={'transition-all hover:text-blue-500'}>
              <i className={'uil uil-estate'}></i> Home
            </a>
          </li>
          <li>
            <a href={'#about'} className={'transition-all hover:text-blue-500'}>
              <i className={'uil uil-question-circle'}></i> About
            </a>
          </li>
          <li>
            <a
              href={'#projects'}
              className={'transition-all hover:text-blue-500'}
            >
              <i className={'uil uil-file-info-alt'}></i> Projects
            </a>
          </li>
          <li>
            <a href={'#join'} className={'transition-all hover:text-blue-500'}>
              <i className={'uil uil-telegram-alt'}></i> Join Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavMobile;
