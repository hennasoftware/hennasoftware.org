function Nav() {
  return (
    <>
      <div className={"hidden md:flex"}>
        <ul className={'flex gap-6 text-lg'}>
          <li><a href="/" className={'transition-all hover:text-blue-500'}>Home</a></li>
          <li><a href="#about" className={'transition-all hover:text-blue-500'}>About</a></li>
          <li><a href="#projects" className={'transition-all hover:text-blue-500'}>Projects</a></li>
          <li><a href="#contact" className={'transition-all hover:text-blue-500'}>Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;
