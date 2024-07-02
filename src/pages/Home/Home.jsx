import React from 'react';
import './Home.css'; // Importing CSS styles for the Home component
import Navbar from '../../components/Navbar/Navbar'; // Importing Navbar component
import hero_banner from '../../assets/hero_banner.jpg'; // Importing hero banner image
import hero_title from '../../assets/hero_title.png'; // Importing hero title image
import play_button from '../../assets/play_icon.png';
import info_button from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'> {/* Main container with 'home' class */}
      <Navbar /> {/* Render Navbar component */}
      <div className="hero"> {/* Hero section */}
        <img src={hero_banner} className='banner-img' alt="Hero Banner" /> {/* Hero banner image */}
        <div className="hero-caption"> {/* Hero caption section */}
          <img src={hero_title} alt="Hero Title" /> {/* Hero title image */}
          <p>
            Lorem ipsum dolor sit, amet consectetur eveniet quibusdam necessitatibus, suscipit cum, maiores beatae. Optio repellat voluptatum numquam aliquam quo. Doloremque.
          </p>
          <div className="hero-btn">
            <button className='btn'><img src={play_button}/>Play</button>
            <button className='btn dark-btn'><img src={info_button}/>Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className='more-cards'>
      <TitleCards title={"Now Playing"} category={"now_playing"}/>
      <TitleCards title={"Popular"} category={"popular"}/>
      <TitleCards title={"Top Rated"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
