const Navbar = () => {
  return (
    <>
      <ul
        id="navbar"
        className="relative top-0 backdrop-blur-sm z-30 flex justify-between bg-[#e2e8f077] px-3 py-4 text-xl border border-black"
      >
        <li className="cursor-pointer flex items-center justify-center gap-1">
          <img src="/img/code-slash.svg" alt="logo" />
          <a href="#home" className="text-2xl font-bold">
            My Porfolio
          </a>
        </li>
        <ul className="flex gap-5">
          <li className="hover:underline cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </ul>
    </>
  );
};

export default Navbar;
