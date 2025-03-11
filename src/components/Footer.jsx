function Footer() {
  return (
    <>
      <footer className={'pt-20 pb-5'}>
        <div className={'container max-w-7xl mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'}>
          <div className={'flex flex-col gap-8 text-lg lg:flex-row lg:justify-between lg:items-center'}>
            <div>
              <h3 className={'font-medium italic text-italic text-2xl'}>Henna
                Software </h3>
              <p className={'text-blue-500 text-base'}>Building Solutions, Growing Together</p>
            </div>

            <div className={'flex flex-col gap-1'}>
              <h4 className={'text-xl text-slate-600'}>Links</h4>

              <ul className={'flex gap-2'}>
                <li><a href={'/'} className={'transition-all hover:text-blue-500'}>Home</a></li>
                <li><a href={'#about'} className={'transition-all hover:text-blue-500'}>About</a></li>
                <li><a href={'#projects'} className={'transition-all hover:text-blue-500'}>Projects</a></li>
                <li><a href={'#contact'} className={'transition-all hover:text-blue-500'}>Join Us</a></li>
              </ul>
            </div>

            <div className={'flex flex-col gap-1 text-5xl'}>
              <h4 className={'text-xl text-slate-600'}>Socials</h4>

              <div className={'flex gap-2'}>
                <a href="https://github.com/hennasoftware" target={'_blank'}
                   className={'transition-all hover:text-blue-500'}>
                  <i className="uil uil-github"></i>
                </a>

                <a href="https://discord.gg/ZfFnhhHDhK" target={'_blank'}
                   className={'transition-all hover:text-blue-500'}>
                  <i className="uil uil-discord"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className={'border border-slate-700 my-2'} />

          <div className={'flex flex-col justify-center items-center text-center text-slate-600 sm:flex-row'}>
            <p>&copy; {new Date().getFullYear()} Henna Software</p>
            <span className={'hidden sm:block'}>&nbsp;-&nbsp;</span>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
