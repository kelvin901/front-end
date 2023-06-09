import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import News from './News';
const ourBands = [
  {
    id:1,
    name: "Queen",
    genre: "Rock",
    description: "Queen is a British band that started in essex in 1972. Boasting ove 50 million copies sold, they are considered one of the most successful rock bands ever.",
    image : 'https://i.discogs.com/XztqBh9zPrHpafbPSTRKrSwvTTVZ1JzOhy0I-tyTWo0/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTgxMDEz/LTEyMTE5Nzg2NTku/anBlZw.jpeg'
  },
  {
    id:2,
    name: "Rolling Stones",
    genre: "Rock",
    description: "C'mon now is there anyone who doesn't know the rolling stones?",
    image : 'https://pbs.twimg.com/media/FtR2HkhWcAIeaMx?format=jpg&name=large'

  }
]

const Home = () => {
  return (
    <div className='home-page'>
      <h2>Your Favourite Bands </h2>
      <div className='band-cards'>
        {ourBands.map((band) => (
         <Link to = {`/profile/${band.name}`} key ={band.id} className='band-card'>
          <img src={band.image}></img>
           <h3>{band.name}</h3>
          <p>{band.genre}</p>
         </Link>



        ))}
      </div>
      <div className="news-container">
        <News />
      </div>


    </div>
  );
};

export default Home;
