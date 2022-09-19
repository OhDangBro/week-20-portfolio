import React from "react";



// Defines handleclick
function Nav({handleClick}) {
 
 return (
    <header className="flex-row px-1">
     <h2> <span role="img" aria-label="camera"> 🏠
     <h3>
        <a data-testid="link" href="/">
        Home
        </a>
      </h3>
     </span> </h2>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">      
            <span data-testid="about" href="#About" onClick={() => handleClick('About')}>
            <h2 class="text-center circle">👨‍🔧</h2>
            <h3>
        <a data-testid="link" href="#About">
          <span role="img" aria-label="camera"> About-Me</span> 
        </a>
      </h3>
            </span>
          </li>
          <li className="mx-2">      
            <span data-testid="portfolio" href="#Portfolio" onClick={() => handleClick('Portfolio')}>
            <h2 class="text-center circle">🖥️</h2>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 
          Portfolio
          </span> 
        </a>
      </h3>
      </span>
      </li>
          <li className="mx-2">      
            <span data-testid="resume" href="#Resume" onClick={() => handleClick('Resume')}>
            <h2 class="text-center circle">📄</h2>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">Resume </span> 
        </a>
      </h3>
            </span>
          </li>
          <li className="mx-2">      
            <span data-testid="contact" href="#Contact" onClick={() => handleClick('Contact')}>
            <h2 class="text-center circle">📞</h2>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">Contact </span> 
        </a>
      </h3>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;