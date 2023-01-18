import React from 'react'
import "./Event.css"

function Event() {
  return (
    <div className='event-ele'>
        <div className='event-tag'>
            <div className='img1'>
                <div className='img11'></div>
            </div>
            <h2 >Events</h2>
            <div className='img2'>
                <div className='img22'></div>
            </div>
        </div>

        <div className='list'>
            <div className='all'>All</div>
            <div className='up'>Upcomming</div>
            <div className='past'>Past</div>
        </div>
        
    </div>
  )
}

export default Event