import React from "react";
import CodeBR from "../../assets/img/codeabr.png";
import Zoom from 'react-reveal/Zoom';



function Code() {
  return (
    <Zoom>
      <section>
        <h2 id="about" className="text-center varela-font">
        Code A Break
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                <h6>
                Code-A-Break is a social media site allowing users to find relaxing resources for
                coding. A user is able to log in and post or comment links for breaks during coding sessions. It was built using HTML, CSS, Bulma, SQL, Insomnia, Express.
              </h6>
                </div>
                <div className="col">
                <a target="_blank" href="https://github.com/OhDangBro/Code-A-Break" rel="noreferrer">
                <img className="selfie" src={CodeBR} alt="CodeABreak landing page"/>
                <h4>
                      Click to be taken to the site
                    </h4>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
}

export default Code;
