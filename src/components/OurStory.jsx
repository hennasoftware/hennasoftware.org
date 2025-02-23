import StoryCard from './StoryCard.jsx';

function OurStory() {
  return (
    <>
      <section id={'about'} className={'py-20 text-center'}>
        <div className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <div className={'space-y-8'}>
            <h3 className={'text-3xl sm:text-4xl'}>Our Story</h3>

            <p className={'text-slate-500 text-base sm:text-2xl'}>From a Discord community of friends to a passionate
              development collective, we're on a mission to learn,
              grow, and create impactful projects together.</p>
          </div>

          <div className={'py-20 flex flex-col gap-6 md:flex-row'}>
            <StoryCard icon={'uil uil-favorite'} title={'The Beginning'}
                       description={'Connected through our shared passion for coding and technology on Discord'} />

            <StoryCard icon={'uil uil-bolt-alt'} title={'Growing Together'}
                       description={'Building a supportive community where every member contributes to collective growth.'} />

            <StoryCard icon={'uil uil-globe'} title={'Making Impact'}
                       description={'Creating solutions that address real-world challenges and make a difference'} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;
