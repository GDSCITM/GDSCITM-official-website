import React, { useState } from 'react';
import "./Event.css";
import Upcoming from './Upcoming';
import { Grid } from "@mui/material";

function Event() {
    const [type, setType] = useState('all');

    const allData = [
        {id:"1",date:"01",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e", futureDate: false},
        {id:"2",date:"02",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f27770", futureDate: false}
        ,{id:"3",date:"03",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg3.png",color:"#3eaff4", futureDate: false},
        {id:"4",date:"04",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg4.png",color:"#6ebb71", futureDate: false},
        {id:"5",date:"06",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f47169", futureDate: false},
        {id:"6",date:"06",month:"sep 22",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e", futureDate: false},
        {id:"1",date:"11",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e", futureDate: true},
        {id:"2",date:"12",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f27770", futureDate: true},
        {id:"3",date:"03",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg3.png",color:"#3eaff4", futureDate: true},
        {id:"4",date:"04",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg4.png",color:"#6ebb71", futureDate: true},
        {id:"5",date:"06",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg2.png",color:"#f47169", futureDate: true},
        {id:"6",date:"06",month:"jan 24",topic:"Orientation Session",text:"We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs"
        ,topImage:"/images/bg1.png",color:"#ffd34e", futureDate: true}
    ];

    const [data, setData] = useState(allData);

    const handle = (value) => {
        setType(value);
        setData(allData.filter(e => value !== 'all' ? value === 'up' ? e.futureDate : !e.futureDate : true));
    }

  return (
    <div className='event-ele'>
    <Grid sx={{ overflow: "hidden" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{paddingTop: '82px'}}>
            <Grid item xs={12} sm={12} md={12}>
                <div className='event-tag'>
                    <div className='img1'>
                        <div className='img11'></div>
                    </div>
                    <h2 >Events</h2>
                    <div className='img2'>
                        <div className='img22'></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <div className='list'>
                    <div className={`tabber ${type === 'all' ? 'active' : ''}`} onClick={() => handle('all')}>All</div>
                    <div className={`tabber ${type === 'up' ? 'active' : ''}`} onClick={() => handle('up')}>Upcoming</div>
                    <div className={`tabber ${type === 'past' ? 'active' : ''}`} onClick={() => handle('past')}>Past</div>
                </div>
            </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className={'cardGrid'}>
            {data.map(anime => (
            <Grid item xs={12} sm={6} md={4} style={{paddingTop: '38px'}}>
                <Upcoming key={anime.id} anime={anime}/>
            </Grid>
            ))}
        </Grid>
    </Grid>
    </div>
  )
}

export default Event