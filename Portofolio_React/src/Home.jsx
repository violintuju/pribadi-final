import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, <span>It's Me</span></h3>
        <h1><span>Violin</span> Tuju</h1>
        <h3>And I'm a student of <span>Computer Science</span></h3>
        <div className="social-media">
          <a href="https://web.facebook.com/violin.violin.9461"><i className='bx bxl-facebook'></i></a>
          <a href="https://wa.me/+6285294797635/?text=Hello Violin" target="_blank" rel="noopener noreferrer"><i className='bx bxl-whatsapp'></i></a>
          <a href="https://www.instagram.com/violintt/"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://github.com/violintuju"><i className='bx bxl-github'></i></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>

      <div className="home-img">
        <img src="img/violin.png" alt="Violin Tuju" />
      </div>
    </section>
  );
};

export default Home;