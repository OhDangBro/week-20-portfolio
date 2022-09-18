import React from "react";
import { capitalizeFirstLetter } from "../../utils/helper";



function Nav({props, handleClick, currentPage}) {
 
  




  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Icon
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span data-testid="about" href="#About" onClick={() => handleClick('About')}>
              About me
            </span>
          </li>
          <li className="mx-2">
            <span data-testid="about" href="#About" onClick={() => handleClick('Resume')}>
              Resume
            </span>
          </li>
          <li className={"mx-2"}>
            <span href="#portfolio" onClick={() => handleClick('Portfolio')}>
              Portfolio
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;