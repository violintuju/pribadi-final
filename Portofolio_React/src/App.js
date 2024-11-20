import React from 'react' 
import { initializeApp } from "firebase/app";

const App = () => {
  return (
  <div>
    <nav className="navbar">
      <a href="#" className="navbar-logo">My<span>Profile</span>.</a>
      <div className="navbar-nav">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-extra">
        <a href="#" id="hamburger-menu"><i className='bx bx-menu'></i></a>
      </div>
    </nav>

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
        <img src="img/violin.png" alt="" />
      </div>
    </section>

    <section className="about" id="about">
      <div className="about-img">
        <img src="img/codeW.png" alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">I'm <span>Violin</span></h2>
        <h3>I'm a student of <span>Computer Science</span></h3>
        <p>Welcome to my portfolio! I’m Violin Tuju, a fifth-semester student majoring in Information Systems. I am passionate about technology, data management, and designing solutions that bridge the gap between business needs and IT. I enjoy learning new skills and continuously expanding my knowledge in areas like system analysis, database management, and digital transformation. My goal is to contribute to innovative projects that create impactful and efficient solutions in the field of Information Systems.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>

    <section className="skills" id="skills">
      <h1 className="sub-title">My <span>Skills</span></h1>
      <div className="container1" id="skill">
        <h1 className="head">Technical skills</h1>
        <div className="Technical-bars">
          <div className="bar"><i style={{ color: '#c95d2e' }} className='bx bxl-html5'></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progres-line html">
              <span></span>
            </div>
          </div>
          <div className="bar"><i style={{ color: '#147bbc' }} className='bx bxl-css3'></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progres-line css">
              <span></span>
            </div>
          </div>
          <div className="bar"><i style={{ color: '#b0bc1e' }} className='bx bxl-javascript'></i>
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progres-line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar"><i style={{ color: '#69bcbc' }} className='bx bxl-react'></i>
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

    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" required />
          <input type="text" placeholder="Email Subject" required />
        </div>
        <textarea cols="30" rows="10" placeholder="Ketik Pesan" required></textarea>
        <input type="submit" value="Kirim Pesan" className="btn" />
      </form>
    </section>
 
    <footer className="footer">
      <div className="footer-text">
        <p className="foot">Copyright &copy; 2024 by Violin Tuju | All Right Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
      </div>
    </footer>
  </div>
  );
};

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQWJeXvHNwC9fOgzGHYg9C01Bnw36uZzU",
  authDomain: "my-portofolio-9bafa.firebaseapp.com",
  projectId: "my-portofolio-9bafa",
  storageBucket: "my-portofolio-9bafa.firebasestorage.app",
  messagingSenderId: "503226811521",
  appId: "1:503226811521:web:f9a9cc5325f90983613980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app (optional, depending on your use case)

export default App;
