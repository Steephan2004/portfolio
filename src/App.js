import logo from './logo.svg';
import './App.css';
import tony from './assets/tony.png'
import fb from './assets/facebook.png'
import ins from './assets/instagram.png'
import lin from './assets/linkedin-logo.png'
import web from './assets/web.jpeg'
import app from './assets/app.jpg'
import api from './assets/api.jpg'
import git from './assets/git.png'
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import todo from './assets/todo.png';
import tic from './assets/tic.png';
import ecom from './assets/ecom.jpg'
import college from './assets/college.jpg'
import sales from './assets/sales.jpg'
import { useEffect } from 'react';
import steve from './assets/steve.png'


function App() {

  useEffect(()=>{
    document.title="Portfolio Website"
  },[]);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        Previous
      </div>
    );
  }

  // Define CustomNextArrow component
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        Next
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };


  return (
    <div className="App">
      <>
        <div className='Home' id='home'>
          <div className='header'>
            <ul>
              <li className='tag'><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li className='tag'><Link to="about" smooth={true} duration={600}>About Us</Link></li>
              <li className='tag'><Link to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
              <li className='tag'><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
            </ul>
          </div>
          <div >
            <p className='heading'>STEVE</p>
            <p className='heading sub-heading'>App and Web Developer</p>
          </div>
        </div>
        <div>
          <h1 style={{ color: '#fff', textAlign: 'center', marginTop: '100px', fontSize: '400%' }} id='about'>About</h1>
        </div>
        <div className='About' id='about'>
          <div className='image'>
            <img src={steve} alt='Tony stark' className='steve' />
          </div>
          <div className='About-me'>
            <div className='me'>
              <h1 style={{}}>I am Steephan Raj!!</h1>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>I am a dedicated and passionate individual with a keen interest in technology and innovation. With a background in computer science and a love for problem-solving, I thrive in challenging environments where I can utilize my analytical skills to develop creative solutions. My curiosity drives me to constantly learn and adapt to new technologies, allowing me to stay at the forefront of industry trends. Outside of my professional pursuits, I enjoy spending time in nature, practicing photography, and immersing myself in different cultures through travel. I am a firm believer in the power of teamwork and collaboration, and I am always eager to contribute positively to any project or community I am a part of.</p>
            </div>
          </div>
        </div>
        <div className='Portfolio' id='portfolio'>
          <h1 style={{ color: '#fff', textAlign: 'center', marginTop: '100px', fontSize: '400%' }}>Skills</h1>
          <div className='skill-container'>
            <div className='skill skill-1'>
              <img src={web} className='skill-img' />
              <div class="overlay">
                <p>Web Development</p>
                <p style={{ fontSize: '15px' }}>I am proficient in HTML, CSS, JavaScript, and React.js for frontend Web development. Additionally, I am skilled in Django for backend development.</p>
              </div>
            </div>
            <div className='skill skill-2'>
              <img src={app} className='skill-img' />
              <div class="overlay">
                <p>App Development</p>
                <p style={{ fontSize: '15px' }}>I am proficient in React Native for frontend App development. Additionally, I am familiar in Django for backend development.</p>
              </div>
            </div>
            <div className='skill skill-3'>
              <img src={api} className='skill-img' />
              <div class="overlay">
                <p>API Integration</p>
                <p style={{ fontSize: '15px' }}>I am proficient in Django Rest Framework</p>
              </div>
            </div>
            <div className='skill skill-4'>
              <img src={git} className='skill-img' />
              <div class="overlay">
                <p>Version Control</p>
                <p style={{ fontSize: '15px' }}>I am proficient in Git and GitHub</p>
              </div>
            </div>
          </div>
          <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '0px', fontSize: '400%' }}>Projects</h1>
         
          <div className="slider-container" style={{ padding: '50px' }}>
            <Slider {...settings}>
              <div className='project'>
                <img src={todo} className='project-image'/>
                <h1 style={{textAlign:'center',marginRight:'50px'}}>To-Do List</h1>
                <p style={{textAlign:'center',fontSize:'18px',marginRight:'50px'}}>It is a Web app ,which is done by HTML,CSS,JavaScript</p>
                <a style={{marginLeft:'90px',padding:'5px',background:'orangered',color:'#fff',fontSize:'18px',borderRadius:'60px'}}>View Code</a>  
              </div>
              <div className='project'>
                <img src={tic} className='project-image'/>
                <h1 style={{textAlign:'center',marginRight:'50px'}}>Tic-Tac-Toe</h1>
                <p style={{textAlign:'center',fontSize:'18px',marginRight:'50px'}}>It's a Mobile Application ,which is done by React Native</p>
                <a style={{marginLeft:'90px',padding:'5px',background:'orangered',color:'#fff',fontSize:'18px',borderRadius:'60px'}}>View Code</a>  
                
              </div>
              <div className='project'>
                <img src={ecom} className='project-image'/>
                <h1 style={{textAlign:'center',marginRight:'50px'}}>E-commerce App</h1>
                <p style={{textAlign:'center',fontSize:'18px',marginRight:'50px'}}>It's a Mobile Application.I have worked in frontend,which is done by React Native</p>
                <a style={{marginLeft:'90px',padding:'5px',background:'orangered',color:'#fff',fontSize:'18px',borderRadius:'60px'}}>View Code</a>  
                
              </div>
              <div className='project'>
                <img src={college} className='project-image'/>
                <h1 style={{textAlign:'center',marginRight:'50px'}}>Grievance App</h1>
                <p style={{textAlign:'center',fontSize:'18px',marginRight:'50px'}}>.It's a Mobile Application ,where I worked in both Frontend and Backend.For Frontend an Backend.I rely on React Native and Django</p>
                <a style={{marginLeft:'90px',padding:'5px',background:'orangered',color:'#fff',fontSize:'18px',borderRadius:'60px'}}>View Code</a>  
                
              </div>
              <div className='project'>
                <img src={sales} className='project-image'/>
                <h1 style={{textAlign:'center',marginRight:'50px'}}>Sales Prediction</h1>
                <p style={{textAlign:'center',fontSize:'18px',marginRight:'50px'}}>It's done by Machine Learning</p>
                <a style={{marginLeft:'90px',padding:'5px',background:'orangered',color:'#fff',fontSize:'18px',borderRadius:'60px'}}>View Code</a>  
                
              </div>
            </Slider>
          </div>

        </div>
        <div className='Contact' id='contact' >
          <div className='contact-link'>
            <h1 style={{ color: '#fff' }}>Quick Links</h1>
            <li className='quick'><Link to="home" smooth={true} duration={800}>Home</Link></li>
            <li className='quick'><Link to="about" smooth={true} duration={700}>About</Link></li>
            <li className='quick'><Link to="portfolio" smooth={true} duration={600}>Portfolio</Link></li>
            <li className='quick'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </div>
          <div className='contact-details'>
            <h1 style={{ color: '#fff' }}>Contact</h1>
            <p style={{ color: '#fff' }}>Mobile:6383765373</p>
          </div>
          <div className='FollowMe'>
            <h1 style={{ color: '#fff' }}>Follow Me</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href='https://www.facebook.com/steephan.raj.9279?mibextid=ZbWKwL'><img src={fb} className='social' /></a>
              <a href='https://www.instagram.com/crowned__king_02?igsh=aHRwb3oyMjRoNGxs'><img src={ins} className='social' style={{ width: '50px', height: '50px' }} /></a>
              <a href='https://www.linkedin.com/in/steephan-raj-90a10b169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={lin} className='social' /></a>
            </div>
          </div>
        </div>

      </>
    </div >
  );
}

export default App;
