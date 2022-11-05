import React,{useRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton,Grid, Divider } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SliderComponent(){

  var rs = useRef();
    var reviews = [
        { id: 1,name:'Akshat Jain',role:'Technical Support', image: '/images/1.png',bg:'/images/bg1.png' },
        { id: 2,name:'Rohit Sharma',role:'UI/UX Designer', image: '/images/2.png',bg:'/images/bg2.png'},
        { id: 3,name:'Harry Singh',role:'System engineer', image: '/images/3.png',bg:'/images/bg3.png' },
        { id: 4,name:'Akshara Jain',role:'Web Development', image: '/images/4.png' ,bg:'/images/bg4.png'},
        { id: 5,name:'Ronit Roy',role:'Web Development', image: '/images/1.png' ,bg:'/images/bg4.png'},
        { id: 6,name:'Vayu Gandhi',role:'System engineer', image: '/images/2.png',bg:'/images/bg3.png' },
        { id: 7,name:'Abhiraj',role:'UI/UX Designer', image: '/images/3.png',bg:'/images/bg2.png' },
        { id: 8,name:'Ram Singh',role:'Technical Support', image: '/images/4.png',bg:'/images/bg1.png' },
      ];

      var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      
      };
      const handleNext = () => {
        rs.current.slickNext();
      
    }
      const handlePrev = () => {
        rs.current.slickPrev();
      };
      const showComponent=()=>{
        return reviews.map((item,index)=>{
            return (
           
            <Grid sx={{maxWidth:202,maxHeight:247.39,margin:10,boxShadow:3,borderRadius:4}}>
              <Grid sx={{height:140,display:'flex',justifyContent:'center', background : `url(${item.bg})`,borderTopLeftRadius:20,borderTopRightRadius:20}}>
<img src={item.image}/>
              </Grid>
             <Grid sx={{height:107.39}}>
             <Typography gutterBottom   style={{display:'flex',justifyContent:'center',fontSize:15.68,fontWeight:'bold'}}component="div">
                 {item.name}
                </Typography>
                <Typography gutterBottom   style={{display:'flex',justifyContent:'center',fontSize:12.54,color:"#333333"}} component="div">
                 {item.role}
                </Typography>
                <Typography variant="body2" style={{display:'flex',justifyContent:'center'}} color="#959595"  >
                <LinkedInIcon fontSize="large"/>
                 <TwitterIcon fontSize="large" />
                </Typography>
             </Grid>
            </Grid>
        
            )
        })
      }
    return(
        <Grid  >
          
         <Grid container spacing={1} style={{width:"100%",display:'flex',marginTop:5,justifyContent:'center',flexDirection:'row',position:'relative'}}>
          <Grid  style={{position:'absolute',top:0,left:100}}>
         <IconButton
           onClick={handlePrev}
          variant="contained"
          style={{cursor:'pointer'}}

        >
          <img src="/images/leftarrow.png"/>
        </IconButton>
        </Grid>
        <Grid style={{marginTop:20,color:"#525252",fontWeight:'bold',fontSize:30}}  >
        <Grid style={{display:'flex',justifyContent:'center'}}>Leadership Team</Grid>
        <Divider color="#333333"/>
        <Grid style={{color:"#666666",fontSize:14,display:'flex',justifyContent:'center'}}>
        vision and courage to create
        </Grid>
        </Grid>
        <Grid style={{position:'absolute',top:0,right:100}} > 
         <IconButton
          onClick={handleNext}
          variant="contained"
          
        >
          <img src="/images/rightarrow.png"/>
        </IconButton>
        </Grid>
        
         </Grid>
          <Grid style={{}}> 
        <Slider {...settings} ref={rs} >
          <div>
          <div style={{display:'grid',gridTemplateColumns:"1fr 1fr 1fr 1fr"}}> 
          
           {showComponent()}
           </div>
           </div>
           <div>
          <div style={{display:'grid',gridTemplateColumns:"1fr 1fr 1fr 1fr"}}> 
          
           {showComponent()}
           </div>
           </div>
         </Slider>
         </Grid>
        </Grid>
    )
}