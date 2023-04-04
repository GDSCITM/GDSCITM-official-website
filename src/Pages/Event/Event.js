import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Event.css"
import Upcoming from './Upcoming'

function Event() {
    const[chosen,setChosen]=useState("all"); /*a variable to keep track of the chosen section, like: 'all' or 'upcoming' or 'past' */
    const[pastData,setPastData]=useState([
        {id:"1",date:"01",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e"},
        {id:"2",date:"02",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f27770"}
        ,{id:"3",date:"03",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg3.png",color:"#3eaff4"},
        {id:"4",date:"04",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg4.png",color:"#6ebb71"},
        {id:"5",date:"06",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f47169"},
        {id:"6",date:"06",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e"}
    ])

    const[upcomingdata,setUpcomingData]=useState([
        {id:"1",date:"11",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e"},
        {id:"2",date:"12",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f27770"}
        ,{id:"3",date:"03",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg3.png",color:"#3eaff4"},
        {id:"4",date:"04",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg4.png",color:"#6ebb71"},
        {id:"5",date:"06",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f47169"},
        {id:"6",date:"06",month:"jan 23",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e"}
    ])
    const allEvents = upcomingdata.concat(pastData) 
    /* allEvents is an array which consists of both upcoming and past events */
    const [allData, setAllData] = useState(allEvents)

    useEffect(() => {
        setAllData(allData)
    }, [allData])

    useEffect(() => {
        setChosen(chosen)
    }, [chosen])

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
        {chosen == "all"?
       <div className='upcomming'>
        {
        pastData.map(anime=>(
        <>
        <Upcoming key={anime.id} anime={anime}/>
        </>
        ))
        }
        </div> :
        chosen == "up" ?
        <div className='upcomming'>
        {
        upcomingdata.map(anime=>(
        <>
        <Upcoming key={anime.id} anime={anime}/>
        </>
        ))
        }
        </div>:
        <div className='upcomming'>
        {
        pastData.map(anime=>(
        <>
        <Upcoming key={anime.id} anime={anime}/>
        </>
        ))
        }
        </div>
        }
    </div>
  )
}

export default Event
