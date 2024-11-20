import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="sub-title">My <span>Skills</span></h1>

      <div className="container1" id="skill">
        <h1 className="head">Technical skills</h1>
        <div className="Technical-bars">
          <div className="bar">
            <i style={{ color: '#c95d2e' }} className='bx bxl-html5'></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progres-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: '#147bbc' }} className='bx bxl-css3'></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progres-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: '#b0bc1e' }} className='bx bxl-javascript'></i>
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progres-line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: '#69bcbc' }} className='bx bxl-react'></i>
            <div className="info">
              <span>React</span>
            </div>
            <div className="progres-line react">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <h1 className="head">Professional skills</h1>
        <div className="radial-bars">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">65%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Problem Solving</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">80%</div>
            <div className="text">Teamwork</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;