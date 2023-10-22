import React from 'react'
import { useState } from 'react'
import "./Event.css"
import Upcoming from './Upcoming'
import events from "./all_event"
function Event() {
    const [chosen, setChosen] = useState("all"); /*a variable to keep track of the chosen section, like: 'all' or 'upcoming' or 'past' */
    const [allEvent, setAllEvent] = useState(events);


    const [upcomingdata, setUpcomingData] = useState([
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
        {
            id: "1", date: "11", month: "jan 23", topic: "Orientation something", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
       
       
    ])
    const [pastData, setPastData] = useState([
        {
            id: "1", date: "01", month: "sep 22", topic: "Orientation Session", text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
            , topImage: "/images/bg1.png", color: "#ffd34e"
        },
      
    ])


    // const allEvents = upcomingdata.concat(pastData) 
    const allEvents = [...pastData, ...upcomingdata];
    /* allEvents is an array which consists of both upcoming and past events */
    const [allData, setAllData] = useState(allEvents)

    const today = new Date(2023, 0, 1);//for comparing which are the upcoming events and which are past events, can be set to current date using, new Date() only.


    today.setHours(0, 0, 0, 0);//as the date object created from events object, will not have time part, setting the time to 0 to variable today, so that we can compare date part of our event with today date part

    const filterEvent = chosen === 'all' ? allEvent : chosen === 'up' ? allEvent.filter(event => new Date(event.date + event.month) >= today) : allEvent.filter(event => new Date(event.date + event.month) < today); //A variable for storing the filtered events in response to whether upcoming or past or all was clicked

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
                <div className={chosen === "all" ? "active" : "all"} onClick={() => setChosen("all")}>All</div>
                <div className={chosen === "up" ? "active" : "up"} onClick={() => setChosen("up")}>Upcoming</div>
                <div className={chosen === "past" ? "active" : "past"} onClick={() => setChosen("past")}>Past</div>
            </div>
            {chosen === "all" ?
                <div className='upcomming'>
                    {
                        allData.map(anime => (
                            <>
                                <Upcoming key={anime.id} anime={anime} />
                            </>
                        ))
                    }
                </div> : ""}

            {chosen === "up" ?

                <div className='upcomming'>
                    {
                        upcomingdata.map(anime => (
                            <Upcoming key={anime.id} anime={anime} />
                        ))
                    }
                </div>
                : " "
            }
            {chosen === "past" ?

                <div className='upcomming'>
                    {
                        filterEvent.map(anime => (
                            <Upcoming key={anime.id} anime={anime} />
                        ))
                    }
                </div>
                : " "
            }
        </div>
    )
}

export default Event
