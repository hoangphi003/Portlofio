function SkillCard({ label, imgURL }) {
  return (
    <div className="flex flex-wrap rounded-lg mt-10 py-2 min-w-40 border justify-center items-center">
      {/* <div className=""> */}
      <img src={imgURL} alt={label} className="pe-2" />
      <h3 className="my-2 font-bold tracking-tight text-white">{label}</h3>
      {/* </div> */}
    </div>
  );
}

export default SkillCard;
