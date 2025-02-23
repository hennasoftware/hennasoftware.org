function Hero() {
  return (
    <>
      <section className={"py-40"}>
        <div className={"container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex"}>
          <div className={'flex flex-col gap-16 text-center max-w-2xl md:text-left lg:max-w-3xl'}>
            <h1 className={"text-blue-500 text-6xl sm:text-7xl"}>Building Solutions, Growing Together</h1>

            <p className={'text-slate-500 text-xl sm:text-2xl'}>A community of passionate Brazilian developers creating
              real-world
              solutions, fostering growth, and
              making a social impact.</p>

            <div className={'flex flex-col gap-4 mx-auto sm:flex-row md:mx-0'}>
              <a href={"https://github.com/hennasoftware"} target={"_blank"}
                 className={"text-xl px-4 py-2 bg-blue-500 rounded-sm w-2xs transition-all hover:bg-blue-900 md:w-fit"}>
                <i className="uil uil-github"></i> Explore our Projects
              </a>

              <a href={"https://discord.gg/ZfFnhhHDhK"} target={"_blank"}
                 className={"text-xl px-4 py-2 bg-transparent border border-blue-500 rounded-sm w-2xs transition-all hover:bg-slate-800 md:w-fit"}>
                <i className="uil uil-comment-heart"></i> Join our Discord
              </a>
            </div>
          </div>

          <div>
            <img src="/src/assets/images/logo.svg" alt="Henna Software logo. A white mug spilling brown coffee."
                 className={'hidden xl:block'}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
