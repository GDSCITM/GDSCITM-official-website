import React from 'react'
import "./Team.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
function MobileTeamsCard({card}) {
    console.log(card)
  return (
    <>
   
    <div className='card-parent'>
        <div className='card'>
            <div className='card-ele1'>
            <div>
                
               <div className='img' style={{ backgroundImage: `url(${card.bg})` }}>
               <img src={card.image} alt=""/>
               </div>
            </div>
            <div className='info'>
                <div>
                    <p className='info-name'> {card.name}</p>
                    <p className='info-role'>{card.role}</p>
                    <div className='info-icons'>
                    <LinkedInIcon fontSize="large"  style={{ cursor: "pointer "  }} />
                    <TwitterIcon fontSize="large"  style={{ cursor: "pointer ", margin:"10px"}}/>
                    <GitHubIcon fontSize="large"  style={{ cursor: "pointer " }}/>
                    </div>
                   

                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MobileTeamsCard