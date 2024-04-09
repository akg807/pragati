import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import jeep from '../assets/svgs/jeep.svg';
import time from '../assets/svgs/time.svg';
import solution from '../assets/svgs/solution.svg';
import './css/home.css';
import { tabTitle } from "../functions";

function Home() {

  tabTitle('Pragati')

  return (
    <>
    {/* -------------------------------------------------------------------------- */
    /*                                HERO SECTION                                */
    /* -------------------------------------------------------------------------- */}
      <div className="worldmap-bg" style={{padding: '5%'}}>
        <Container maxWidth="sm" sx={{textAlign: 'center', mt: '5%'}}>

            <Typography variant="h3" sx={{display: {xs:'none', md:'block'}}}>Flying in India made</Typography>
            <Typography sx={{display: {xs:'block', md:'none'}, fontSize: '2.1rem'}}>Flying in India made</Typography>
            
            <Typography variant="h3" sx={{color: 'var(--indigo)', display: {xs:'none', md:'block'}}}>Cheaper. Faster. Reliable.</Typography>
            <Typography sx={{color: 'var(--indigo)', display: {xs:'block', md:'none'}, fontSize: '2.1rem'}}>Cheaper. Faster. Reliable.</Typography>

            <Typography variant="h5" sx={{fontWeight:'none', mt:4, display: {xs:'none', md:'block'}}}>Pragati is aimed at improving the Aviation Experience of India.</Typography>
            <Typography  sx={{fontWeight:'none', mt:2, display: {xs:'block', md:'none'}}}>Pragati is aimed at improving the Aviation Experience of India.</Typography>

            <div style={{marginTop:'8%'}}>
              <Button onClick={() => {window.location.href="/flights"}} className="indigo-btn" sx={{px: '5%'}}>Search Flights</Button>
              {/* <Button onClick={() => {window.location.href="https://github.com/ManavMehta-Official/SkyClub"}} className="gray-btn" sx={{ml:2, px: '7%'}}>Github &nbsp; <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}} /></Button> */}
            </div>

        </Container>
      </div>

      <Container maxWidth='lg' sx={{mt:8}}>


        <Grid container>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Search Cheap Flight Tickets</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Search Cheap Flight Tickets</Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}><img src={jeep} alt="family travelling on jeep" width="100%" /></Grid>
        </Grid>

        <Grid container sx={{mt:10}}>
          <Grid item md={6} xs={12} sx={{display:{xs:'none', md:'block'}}}><img src={time} alt="time management" width="100%" /></Grid>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Last-Minute Deals</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Last-Minute Deals</Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} sx={{display:{xs:'block', md:'none'}, mt:5}}><img src={time} alt="time management" width="100%" /></Grid>
        </Grid>

        <Grid container sx={{mt:10}}>
          <Grid item md={6} xs={12} sx={{textAlign:'left'}}>
            <Typography variant="h4" className="fw-900" sx={{display:{xs:'none', md:'block'}}}><i style={{fontSize:'3rem'}} className="indigo">#</i> Group 154</Typography>
            <Typography variant="h5" className="fw-900" sx={{display:{xs:'block', md:'none'}}}><i style={{fontSize:'2.4rem'}} className="indigo">#</i> Group 154</Typography>
            <Typography>
            s a sense of community among developers, allowing them to collaborate and contribLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            {/* <Typography variant="h5" className='fw-700' sx={{mt:4, textAlign: 'center'}}>Join the Developer Community</Typography> */}
            {/* <Typography sx={{mt:1, textAlign: 'center'}}>By Contributing to the SkyClub India Github Repository.</Typography> */}
            {/* <div style={{textAlign:'center'}}>
              <Button className="indigo-btn" onClick={() => {window.location.href="https://github.com/ManavMehta-Official/SkyClub"}} sx={{mt:2, px:4}}>Join Community</Button>
            </div> */}
          </Grid>
          <Grid item md={6} xs={12} sx={{mt:5}}><img src={solution} alt="people working on a solution" width="100%" /></Grid>
        </Grid>


      </Container>

      <Container maxWidth="sm" sx={{mt:10, textAlign:'center'}}>
        {/* <Typography variant="h3" className='fw-900'>Ready to Join the Club?</Typography> */}
        <Button onClick={() => {window.location.href="/flights"}} className="indigo-btn" size="large" sx={{mt:5, px:4, mb:5}}>Search Flight Deals</Button>
      </Container>

    </>
  )
}

export default Home;