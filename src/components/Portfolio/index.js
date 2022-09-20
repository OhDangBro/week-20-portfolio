import React, { useState } from 'react';
import Movie from '../Movie/index';
import Weather from '../Weather/index';

function Portfolio({ handleClick }) {
  const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
      if (currentPage === 'Movie') {
        return <Movie />
      }
      if (currentPage === 'Weather') {
        return <Weather />
      }

    };

    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className="d-flex justify-content-center">
     

      <div id="about" className="my-2">
        <p>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <span
                  data-testid="movie"
                  href="#Movie"
                  onClick={() => handlePageChange("Movie")}
                >
                  <h2 class="text-center circle">🎬</h2>
                  <h3>
                      <span role="img" aria-label="camera">
                        {" "}
                        Movie-Stream
                      </span>
                  </h3>
                </span>
              </li>
              <li className="mx-2">
                <span
                  data-testid="portfolio"
                  href="#Portfolio"
                  onClick={() => handlePageChange("Weather")}
                >
                  <h2 class="text-center circle">⛅</h2>
                  <h3>
                    
                      <span role="img" aria-label="camera">
                        Weather App
                      </span>
                    
                  </h3>
                </span>
              </li>
              <li className="mx-2">
                <span
                  data-testid="third"
                  onClick={() => handleClick("Third")}
                >
                  <h2 class="text-center circle">📁</h2>
                  <h3>
                    
                      <span role="img" aria-label="camera">
                        Filler{" "}
                      </span>
                    
                  </h3>
                </span>
              </li>
            </ul>
          </nav>
        </p>
        <div>{renderPage()}</div>
      </div>
      <div></div>
    </section>
  );
}

export default Portfolio;
