import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cardsData from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'



export const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGJjNjg2MzBmMDMxYjAxYTdjMzYwZmM1YzA2NmZkZiIsIm5iZiI6MTcyOTkyNjA1NC43MTk0OTMsInN1YiI6IjY3MWM5MWQzZTgzM2Q5MmVmMDYwMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.riqsacp7ddQdoT4CCxefskZiWntIIDjlGohu_P_3MPo'
    }
  };
  




  
const handlewheel = (event)=>{
   event.preventDefault()
   cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{


  fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handlewheel)
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>

          </Link>
        })}
      </div>
    </div>
  )
}
