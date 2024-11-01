import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import {useParams,useNavigate} from 'react-router-dom'


 const Player = () => {
  const {id} =  useParams()
  const navigate = useNavigate()


  const [apiData,setApiData] =useState({
       name:"",
       key :"",
       published_at:"",
       type : ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGJjNjg2MzBmMDMxYjAxYTdjMzYwZmM1YzA2NmZkZiIsIm5iZiI6MTcyOTkzMzgxNC4wMjA2NjksInN1YiI6IjY3MWM5MWQzZTgzM2Q5MmVmMDYwMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vq6DGy3XTVBpl9AVs3K9qA9KT9ZXJw4rlpC4VP897DY'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])
  

  return (
    <div className=' player'>
     <img src={backArrowIcon} alt="" onClick={()=>{navigate(-2)}}/>
     <iframe  width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
     <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
     </div>

    </div>
  )
}


export default Player