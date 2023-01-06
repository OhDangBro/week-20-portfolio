import React, { useState } from "react";
import Movie from "../Movie/index";
import Weather from "../Weather/index";
import Code from "../CodeABR/index";
import ReikiHealing from "../ReikiHealing";
import Apiary from "../GehrkeApiaries";
import Zoom from 'react-reveal/Zoom';



function Portfolio({ handleClick }) {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Movie") {
      return <Movie />;
    }
    if (currentPage === "Weather") {
      return <Weather />;
    }
    if (currentPage === "Code") {
      return <Code />;
    }
    if (currentPage === "Reiki") {
      return <ReikiHealing />;
    }
    if (currentPage === "Apiary") {
      return <Apiary />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex justify-content-center">
      <div id="about" className="my-2">
<Zoom>
        <p className="largerText text-center varela-font"> My Work</p>
        </Zoom>
        <p>
          <nav>
            <ul className="flex-row">
            <Zoom bottom>

              <li className="mx-2">
                
                <a
                  data-testid="movie"
                  href="#Portmain"
                  onClick={() => handlePageChange("Movie")}
                >
                  <h2 className="largeIcon text-center circle">🔎</h2>
                  <h3>
                    <a role="img" aria-label="camera">
                      {" "}
                      Search and Stream
                    </a>
                  </h3>
                </a>
              </li>
              </Zoom>
              <Zoom bottom>
              <li className="mx-2">
                <a
                  data-testid="portfolio"
                  href="#Portmain"
                  onClick={() => handlePageChange("Weather")}
                >
                  <h2 className="largeIcon text-center circle">🎥</h2>
                  <h3>
                    <a role="img" aria-label="camera">
                      MovieSwipe
                    </a>
                  </h3>
                </a>
              </li>
              </Zoom>
              <Zoom bottom>
              <li className="mx-2">
                <a
                  data-testid="code"
                  href="#Portmain"
                  onClick={() => handlePageChange("Code")}
                >
                  <h2 className="largeIcon text-center circle">📁</h2>
                  <h3>
                    <a  role="img" aria-label="camera" id="#codeabr">
                      Code-A-BR{" "}
                    </a>
                  </h3>
                </a>
              </li>
              </Zoom>
              <Zoom bottom>
              <li className="mx-2">
                <a
                  data-testid="code"
                  href="#Portmain"
                  onClick={() => handlePageChange("Reiki")}
                >
                  <h2 className="largeIcon text-center circle">🧘🏽</h2>
                  <h3>
                    <a  role="img" aria-label="camera" id="#reiki">
                      ReikiHealing{" "}
                    </a>
                  </h3>
                </a>
              </li>
              </Zoom>
              <Zoom bottom>
              <li className="mx-2">
                <a
                  data-testid="code"
                  href="#Portmain"
                  onClick={() => handlePageChange("Apiary")}
                >
                  <h2 className="largeIcon text-center circle">🐝</h2>
                  <h3>
                    <a role="img" aria-label="camera" id="#apiary">
                     Gehrke Apiaries{" "}
                    </a>
                  </h3>
                </a>
              </li>
              </Zoom>
            </ul>
          </nav>
        </p>
        <div id="Portmain">{renderPage()}</div>
      </div>
      <div></div>
    </div>
  );
}

export default Portfolio;
