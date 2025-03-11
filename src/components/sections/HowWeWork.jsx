import WorkCard from '../WorkCard.jsx';

function OurStory() {
  return (
    <>
      <section className={'py-20 text-center bg-slate-900'}>
        <div className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <h3 className={'text-3xl sm:text-4xl'}>How We Work</h3>

          <div className={'pt-20 flex flex-col gap-6 md:flex-row'}>
            <WorkCard
              icon={'uil uil-wrench'}
              title={'Learn by Doing'}
              description={
                'We prioritize hands-on experience to fuel our growth and development.'
              }
            />

            <WorkCard
              icon={'uil uil-heart'}
              title={'Team Support'}
              description={
                "Every member's success is a team achievement, we grow stronger together."
              }
            />

            <WorkCard
              icon={'uil uil-lightbulb-alt'}
              title={'Real Impact'}
              description={
                'We focus on creating solutions that matter and make a difference.'
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;
