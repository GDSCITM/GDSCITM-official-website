import React from 'react'
import { useState } from 'react'
import "./Event.css"
import Upcoming from './Upcoming'
import events from "./all_event"
function Event() {
    const[chosen,setChosen]=useState("all"); /*a variable to keep track of the chosen section, like: 'all' or 'upcoming' or 'past' */
    const [allEvent,setAllEvent] = useState(events);

    const today = new Date(2023,0,1);//for comparing which are the upcoming events and which are past events, can be set to current date using, new Date() only.

    today.setHours(0,0,0,0);//as the date object created from events object, will not have time part, setting the time to 0 to variable today, so that we can compare date part of our event with today date part

    const filterEvent = chosen==='all'?allEvent:chosen==='up'?allEvent.filter(event => new Date(event.date + event.month)>=today):allEvent.filter(event => new Date(event.date + event.month)<today); //A variable for storing the filtered events in response to whether upcoming or past or all was clicked

  return (
    <div className='event-ele' id='event'>
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
            <div className={chosen === "all"?"active":"all"} onClick={() => setChosen("all")}>All</div>
            <div className={chosen === "up"?"active":"up"} onClick={() => setChosen("up")}>Upcoming</div>
            <div className={chosen === "past"?"active":"past"} onClick={() => setChosen("past")}>Past</div>
        </div>
        
        <div className='upcomming'>
        {
        filterEvent.map(anime=>(
        <Upcoming key={anime.id} anime={anime}/>
        ))
        }
        </div>
    </div>
  )
}

export default Event
