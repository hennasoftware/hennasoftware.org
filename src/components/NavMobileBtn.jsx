function NavMobileBtn(props) {
  return (
    <>
      <button onClick={props.toggleMenu} type={'button'} className={'flex text-4xl'}>
        <span className={'sr-only'}>Open main menu</span>
        {props.isMenuOpen ? (
          <i className={'uil uil-times cursor-pointer transition-all hover:text-blue-500'}></i>
        ) : (
          <i className={'uil uil-bars cursor-pointer transition-all hover:text-blue-500'}></i>
        )}
      </button>
    </>
  );
}

export default NavMobileBtn;
