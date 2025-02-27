function JoinUs() {
  return (
    <>
      <section id={'join'} className={'py-20 text-center bg-slate-900'}>
        <div className={'container max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'}>
          <h3 className={'text-3xl sm:text-4xl'}>Want to Collaborate?</h3>

          <p className={'text-slate-500 text-base sm:text-xl'}>We may currently be a close-knit group of friends, but
            we're always excited to welcome passionate and like-minded individuals from all corners of the world to
            collaborate on impactful projects. If you share our enthusiasm for learning, growth, and making a
            difference, we'd love to work with you</p>

          <div className={'mt-20'}>
            <a href={'https://discord.gg/ZfFnhhHDhK'} target={'_blank'}
               className={'shadow-lg shadow-blue-500/50 w-full max-w-2xs text-xl px-8 py-4 bg-blue-500 rounded-sm transition-all hover:bg-blue-400 sm:w-fit sm:text-2xl'}>
              <i className="uil uil-message"></i> Reach Out to Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinUs;
