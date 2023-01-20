import React from 'react'
import { useState } from 'react'
import "./Event.css"
import Upcoming from './Upcoming'

function Event() {
    const[all,setAll]=useState(false);
    const[data,setData]=useState([
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

    const[alldata,setAllData]=useState([
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
    const handle=(e)=>{
        setAll(!all);
    }
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
            <div className='all' onClick={handle}>All</div>
            <div className='up' onClick={handle}>Upcoming</div>
            <div className='past'>Past</div>
        </div>
        {all?
       <div className='upcomming'>
        {
        data.map(anime=>(
        <>
        <Upcoming key={anime.id} anime={anime}/>
        </>
        ))
        }
        </div>:
        <div className='upcomming'>
        {
        alldata.map(anime=>(
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