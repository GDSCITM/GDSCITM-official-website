import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'boxicons'
import "./Footer.css"

export default function Footer() {
    const theme = createTheme();
    //for making responsive text
    theme.typography.h5 = {
        fontSize: '1.4rem',
        '@media (max-width:600px)': {
          fontSize: '1rem',
        }
      };
    theme.typography.subtitle2={
        '@media(max-width: 600px':{
            fontSize: '0.5rem',
        }
    };
    theme.typography.body2={
        '@media(max-width: 600px':{
            fontSize: '0.3rem',
        }
    };
    theme.typography.links={
        '@media(max-width: 600px':{
            fontSize: '0.3rem',
            color:'#ffffff'
        }
    };


  
    return(
    <div className="grid_container">
        <Grid container spacing={1}>
            {/* === Footer Left Section === */}
            <Grid item lg={4} xs={12}>
                <div className="grid_container__box1"> 
                    {/*=== Logo Cotainer === */}
                   <div className="grid_container__box1__logo_container">
                    <div><img src={"images/GDSC LOGO FOOTER.png"} height={"45px"} alt="gdsc"/></div>
                    <div><LocationOnIcon/></div>
                    <div><EmailIcon/></div>
                    </div> 
                    {/*=== Text Cotainer === */}
                   <div className="grid_container__box1__text_container">
                   
                    <div className="gdsc_title">
                        <ThemeProvider theme={theme}>
                        <Typography variant="h5">Google Developer Student Club</Typography>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                          <Typography variant="subtitle2">ITM Guwalior</Typography>
                        </ThemeProvider>                       
                        
                    </div>
                    <div class="grid_container__box1__text_container__address">
                        <ThemeProvider theme={theme}>
                        <Typography variant="body2">Nh 75 Opp Sithouli Railway Station
                        Gwalior, Madhya Pradesh 475001
                        Von Neumann Block, 3rd floor</Typography>
                        </ThemeProvider>
                        
                    </div>
                    <div class="grid_container__box1__text_container__email" >
                        <Typography variant="body2">gdsc@itm.ac.in</Typography>
                        {/* === Social Icons === */}
                        <div>
                            <InstagramIcon className="socialIcon"/>
                            <YouTubeIcon className="socialIcon"/>
                            <LinkedInIcon className="socialIcon"/>
                           <box-icon name='discord-alt' type='logo' color='#d4d4d4' className="socialIcon"></box-icon>
                        <TwitterIcon className="socialIcon"/>
                        </div>
                    </div>
                    </div>              
                </div>
            </Grid>
            {/* ==== Middle Box ==== */}
            <Grid item lg={4} xs={12}>
                <div className="grid_container__box2">
                    <div className="grid_container__box2__middle"><Typography variant="h6">Join</Typography></div>
                    <div className="grid_container__box2__line1"></div>
                    <div className="grid_container__box2__line2"></div>
                    <div className="grid_container__box2__line3"></div>
                    <div className="grid_container__box2__line4"></div>
                </div>
            </Grid>
            <Grid item lg={4} xs={12}>
                <div className="grid_container__box3">
                    <div>
                        <Typography variant="subtitle1">Quick Links</Typography>
                        <div className='grid_subcontainer__box3'>
                        <Typography variant="body2">Home</Typography>
                        <Typography variant="body2">About</Typography>
                        <Typography variant="body2">Events</Typography>
                        <Typography variant="body2">Teams</Typography>
                        </div>
                    </div>
                    <div className="grid_container__box3__programs">
                    <Typography variant="subtitle1">Programs</Typography>
                        <Typography variant="body2">Women Techmakers</Typography>
                        <Typography variant="body2">Google Developer Groups</Typography>
                        <Typography variant="body2">Google Developers Experts</Typography>
                        <Typography variant="body2">Accelerators</Typography>
                        <Typography variant="body2">Google Developer Student Clubs</Typography>
                    </div>
                
                </div>
            </Grid>
            <div className="gdsc__copyright"><Typography variant="body2">&copy; 2023 GDSC ITM</Typography></div>
        </Grid>
        
    </div>
    )
}