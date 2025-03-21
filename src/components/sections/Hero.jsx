import logo from '../../assets/images/logo.svg';

function Hero() {
  return (
    <>
      <section
        className={
          'py-40 min-h-screen bg-gradient-to-tl from-slate-950 to-blue-900 flex items-center justify-center'
        }
      >
        <div
          className={
            'container h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center'
          }
        >
          <div
            className={
              'flex flex-col gap-16 text-center max-w-2xl md:text-left lg:max-w-3xl'
            }
          >
            <h2 className={'text-blue-500 text-6xl md:text-7xl'}>
              Building Solutions, Growing Together
            </h2>

            <p className={'text-slate-500 text-xl sm:text-2xl'}>
              A community of passionate Brazilian developers creating real-world
              solutions, fostering growth, and making a social impact.
            </p>

            <div
              className={
                'flex flex-col justify-center items-center gap-4 mx-auto w-full sm:flex-row md:mx-0 md:justify-start'
              }
            >
              <a
                href={'https://github.com/hennasoftware'}
                target={'_blank'}
                className={
                  'shadow-lg shadow-blue-500/50 w-full max-w-2xs text-xl px-4 py-2 bg-blue-500 rounded-sm transition-all hover:bg-blue-400 sm:w-2xs md:w-fit'
                }
              >
                <i className="uil uil-github"></i> Explore our Projects
              </a>

              <a
                href={'https://discord.gg/ZfFnhhHDhK'}
                target={'_blank'}
                className={
                  'shadow-lg shadow-blue-800/50 w-full max-w-2xs text-xl px-4 py-2 bg-transparent border border-blue-900 rounded-sm transition-all hover:bg-blue-950 sm:w-2xs md:w-fit'
                }
              >
                <i className="uil uil-discord"></i> Join our Discord
              </a>
            </div>
          </div>

          <div>
            <img
              src={logo}
              alt={'Henna Software logo. A white mug spilling brown coffee.'}
              className={'hidden xl:block'}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
