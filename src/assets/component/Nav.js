import { menuIcon, searchIcon } from "../icons";
import { logo } from "../img";

function Nav() {
  return (
    <section className="mt-6 max-container flex flex-1 justify-between items-center">
      <div className="logo">
        <img src={logo} alt="" height={70} width={70} />
      </div>
      <div className="content-nav max-sm:hidden md:hidden max-md:hidden lg:block max-xl:block max-2xl:block">
        <ul className="flex space-x-7 text-slate-gray font-RadioCanadaBig text-lg">
          <li>
            <a href="#projects" className="hover:text-yellow-50">
              Projects
            </a>
          </li>
          <li>
            <a href="#skill" className="hover:text-yellow-50">
              My Skills
            </a>
          </li>
          <li>
            <a href="#contactme" className="hover:text-yellow-50">
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <div className="search relative max-sm:hidden md:hidden max-md:hidden lg:block max-xl:block max-2xl:block">
        <input
          type="text"
          placeholder="Search"
          className="bg-secondary rounded-md py-2 focus:outline-none pl-2  text-yellow-50 text-lg font-RadioCanadaBig"
        />
        <img
          src={searchIcon}
          alt="searchIcon"
          width={24}
          height={24}
          className="absolute bottom-[50%] translate-y-1/2 lg:end-1 max-sm:end-1 md:end-1 bg-secondary"
        />
      </div>
      <img
        src={menuIcon}
        alt="menu mobile"
        className="max-sm:block md:block max-md:block lg:hidden max-xl:hidden max-2xl:hidden cursor-pointer"
        width={30}
        height={30}
      />
    </section>
  );
}

export default Nav;
