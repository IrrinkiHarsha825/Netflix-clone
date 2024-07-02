import React, { useRef,useEffect ,useState} from 'react';
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import {Link } from 'react-router-dom'




const TitleCards = ({title,category}) => {

  const [apiData,setApiData]=useState([]);
    const cardsRef = useRef(null);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDNjNWM1ZTI3MmI1NDA1YWJjOGU1ODZiMGE3MDBkYiIsIm5iZiI6MTcxOTI0NTU5NS45NDg2NTcsInN1YiI6IjY2Nzk4NTYwNzZjNzg4MDZmMDU2NTUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8Gym7KgZpTrvLZbhAipI_ZT1iKhe3_zMtN8qdbxVXk'
      }
    };

  
    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };
  
    useEffect(() => {
          
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

      const ref = cardsRef.current;
  
      if (ref) {
        ref.addEventListener('wheel', handleWheel);
  
        return () => {
          ref.removeEventListener('wheel', handleWheel);
        };
      }
    }, []); // Empty dependency array to run effect only once
  
    return (
      <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => {
           return  <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          })}
        </div>
      </div>
    );
  };
  




export default TitleCards
