const events = [
  {
    id: "1",
    date: "01",
    month: "sep 22",
    topic: "Orientation Session",
    text: "We are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students ClubsWe are having a live session where we will introduce you to Google Developer Students Clubs",
    topImage: "/images/bg1.png",
    color: "#ffd34e",
  },
 
];

//Sorted the events array in ascending order of their time
events.sort((a, b) => new Date(a.date + a.month) - new Date(b.date + b.month));
export default events;
