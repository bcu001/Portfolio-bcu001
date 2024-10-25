const SkillCard = (props) => {
  return (
    <>
      <div
        id="backend"
        className="bg-white p-6 transition-transform duration-300 ease-in-out w-[220px] h-[240px] flex flex-col items-center hover:scale-105 shadow-lg shadow-gray-400 rounded-lg overflow-hidden flex-shrink-0"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          {props.title}
        </h3>
        <ul className="flex flex-col gap-4 items-center justify-center">
          <li>
            <img
              src={props.firstSkill}
              alt="skill"
              width={props.width1}
              className="transition-transform duration-200 hover:scale-110"
            />
          </li>
          <li>
            <img
              src={props.secondSkill}
              alt="skill"
              width={props.width2}
              className="transition-transform duration-200 hover:scale-110"
            />
          </li>
          <li>
            <img
              src={props.thirdSkill}
              alt="skill"
              width={props.width3}
              className="transition-transform duration-200 hover:scale-110"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillCard;
