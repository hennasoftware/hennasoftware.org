function StoryCard(props) {
  return (
    <>
      <div
        className={'bg-slate-900 border-2 border-slate-800 w-full p-6 rounded-xl text-left flex flex-col gap-4 md:max-w-sm'}>
        <div className={'size-12 bg-blue-500 flex justify-center items-center rounded-xl text-2xl'}>
          <i className={`${props.icon}`}></i>
        </div>

        <h4 className={'text-blue-500 text-xl'}>{props.title}</h4>
        <p className={'text-slate-500 text-base'}>{props.description}</p>
      </div>
    </>
  );
}

export default StoryCard;
