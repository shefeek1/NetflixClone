import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl, apikey } from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
   const [movie, setMovie] = useState([])
   const [urlId, seturlId] = useState()

  useEffect(() => {
    axios.get(props.url).then(response=>
      {
        console.log("data is",response.data);
        console.log(props.title);
        setMovie(response.data.results)
      })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie= (id) =>
  {
   console.log("Movie id is", id);
   axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`)
   .then(response=>
    {
      console.log(response.data.results);
     if(response.data.results.length!==0)
     {
       seturlId(response.data.results[0])
     }
    })
  }
  return (
    
    
    <div>
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
              {movie.map((obj)=><img 
            onClick={()=>handleMovie(obj.id)}  className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
              )}

                
                 
            </div>
            { urlId && <YouTube opts={opts} videoId={urlId.key}  />}

        </div>

    </div>
  )
}

export default Rowpost