import React from 'react'
import "./Event.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Upcoming({anime}) {
  // const[data1,setData]=useState([]);
  console.log(anime)
  
  
  return (
    <div className='card1'>
    <div className='card-ele'>
      <div>
        <div className='upcoming-img' style={{ backgroundImage: `url(${anime.topImage})` }}>
        {/* <img src={anime.topImage} alt="" >
        </img> */}
        <div className='date'>
            <h3>{anime.date}
            <p>{anime.month}</p>
            </h3>
            
          </div>
         
          <div className='border'>
            
          </div>
          <div className='topic'>
            Orientation <br></br>Session
          </div>
        </div>
      </div>
      <div className='text-data'><p>{anime.text}

        </p></div>
      <div className='know-ele'  style={{backgroundColor: anime.color}}>
        <OpenInNewIcon />
        <p>Know More</p>
      </div>
    </div>
    </div>
  )
}

export default Upcoming