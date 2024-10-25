const ProjectCard = ({
  title,
  description,
  previewLink,
  sourceCodeLink,
  previewImg,
}) => {
  const preview = () => {
    window.open(previewLink, "_blank");
  };
  const sourceCode = () => {
    window.open(sourceCodeLink, "_blank");
  };
  return (
    <>
      <div className="w-[270px] h-[350px] rounded-lg bg-slate-200 p-4 shadow-lg shadow-gray-400 flex flex-col justify-between gap-4 cursor-pointer group transition-transform transform hover:scale-105">
        <img
          className="w-full h-[160px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src={previewImg}
          alt="project-pic"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-xl font-semibold text-gray-800">{title}</p>
            <p className="text-md text-gray overflow-clip h-[55px]">
              {description}
            </p>
          </div>
          <div className="mt-auto flex gap-3">
            <button
              onClick={sourceCode}
              className="bg-gradient-to-r from-green-400 to-green-500 p-2 text-white font-semibold rounded-lg w-full hover:from-green-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
            >
              Source Code
            </button>
            <button
              onClick={preview}
              className="bg-gradient-to-r from-green-400 to-green-500 p-2 text-white font-semibold rounded-lg w-full hover:from-green-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
