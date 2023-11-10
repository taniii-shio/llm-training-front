import React from "react";
// import { BsMoon, BsSun } from "react-icons/bs";

type HeaderProps = {
  // children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({}) => {
  // const isDarkMode = false;

  return (
    <header className="px-6 py-6 border-b bg-white">
      <div className="flex justify-between">
        <section>
          <span className="text-xl text-slate-800 font-bold">ArXiv Search</span>
        </section>
        <section>
          <ul>
            <li>
              {/* <button>{isDarkMode ? <BsSun /> : <BsMoon />}</button> */}
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
