function WorkCard(props) {
  return (
    <>
      <div
        className={'bg-gradient-to-t from-slate-950 to-slate-900 border-2 border-slate-800 w-full p-6 rounded-xl text-left flex flex-col gap-4 md:max-w-sm'}>
        <h4 className={'text-xl'}><i className={`${props.icon} text-2xl`}></i> {props.title}</h4>
        <p className={'text-slate-500 text-base'}>{props.description}</p>
      </div>
    </>
  );
}

export default WorkCard;
