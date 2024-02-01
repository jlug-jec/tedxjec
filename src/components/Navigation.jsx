import { useState } from "react";

const Navigation = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div>

      <input type="checkbox" className="navigation__checkbox invisible" id="navi-toggle" />
        {/* {flag ? <i className="fa-solid fa-bars text-white h-5"></i> : <i className="fa-solid fa-xmark z-[2000]"></i>} */}

      <label htmlFor="navi-toggle" className="navigation__button flex justify-center items-center" onClick={() => setFlag(currFlag => !currFlag)}>
        {/* <span className="navigation__icon">&nbsp;</span> */}
        {/* <i className="fa-solid fa-bars z-[10000] text-black" ></i> */}
        {flag ? <i className="fa-solid fa-bars z-[10000] text-black" ></i> : <i className="fa-solid fa-xmark z-[10000] text-black"></i>}
        {/* {flag ? <h1>Allli</h1> : <h1>Pyaaz</h1>} */}
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav flex justify-between items-center flex-col">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>01</span>Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>02</span>About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>03</span>Speakers
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>04</span>FAQs
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>05</span>Sponsors
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link md:text-3xl text-sm">
              <span>06</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
