import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="img/codeW.png" alt="About Me" />
      </div>

      <div className="about-content">
        <h2 className="heading">I'm <span>Violin</span></h2>
        <h3>I'm a student of <span>Computer Science</span></h3>
        <p>
          Welcome to my portfolio! I’m Violin Tuju, a fifth-semester student majoring in Information Systems. I am passionate about technology, data management, and designing solutions that bridge the gap between business needs and IT. I enjoy learning new skills and continuously expanding my knowledge in areas like system analysis, database management, and digital transformation. My goal is to contribute to innovative projects that create impactful and efficient solutions in the field of Information Systems.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;