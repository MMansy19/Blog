import { Link } from "react-router-dom";
import logo from "../assets/Union.png";
import searchIcon from "../assets/search.svg";
function Header({ handleSearchChange, searchFocus }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 px-2 py-8 lg:px-8">
      <Link
        to="/"
        rel="Home"
        className="header__logo flex items-center gap-4 lg:gap-[70px]"
      >
        <img src={logo} alt="Blog logo" />
        <h1 className="text-[#141624] font-bold text-2xl ">Blog</h1>
      </Link>
      <Link to="/" rel="Home" className=" text-[#3B3C4A]">
        Home
      </Link>
      <div className="relative w-full sm:w-fit">
        <input
          ref={searchFocus}
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Search"
          className="bg-[#F4F4F5] p-2 rounded w-full"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleSearchChange(event.target.value);
            }
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          className="absolute right-2 top-1/3"
        />
      </div>
    </header>
  );
}
export default Header;
