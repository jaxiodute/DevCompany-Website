import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import animationData from '../animations/landinganimation/data.js';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'

import {Grid,Button, Typography,useMediaQuery,Card,CardContent} from '@material-ui/core'

import ButtonArrow from './ui/ButtonArrow'
import CallToAction from './ui/CallToAction'

const useStyles =makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"25em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"30em"
        }
    },
    estimateButton:
    {
        ...theme.typography.estimate,
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height:45,
        width:145,
        marginRight:40,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light,
        },
        buttonContainer:{
            marginTop:"1em",
        }
    },
    learnButtonHero:
    {
        ...theme.typography.learnButton,
        fontSize:"0.9rem",
        height:45,
        width:145,
        
    },
    mainContainer:{
        marginTop:"5em",
    },
    headingItem:{
        
        minWidth:"21.5em",
        marginLeft:"1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0,
        }
    },
    specialText:{
        fontFamily:"Pacifico",
        color:theme.palette.common.orange
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em",
        }
    },
    subtitle:{
        marginBottom:"1em",
    },
    icon:
    {
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0,
        }
    },
    serviceContainer:{
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
            padding:25,
        }
    },
    revolutionBackground:{
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat :"no-repeat",
        height:"100%",
        width:"100%",
    },
    revolutionCard:{
        position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:"10em",
        [theme.breakpoints.down("sm")]:{
            paddingTop:"8em",
            paddinBottom:"8em",
            paddingLeft:0,
            paddingRight:0,
            borderRadius:0,
            width:"100%",
        }
    },
    infoBackground:
    {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat :"no-repeat",
        height:"100%",
        width:"100%",
    }
}));

export default function LandingPage(props){
    const classes=useStyles();
    const theme=useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:animationData,
        rendererSettings:{
            preserveAscpectRatio : 'xMidYMid slice'
        }
    }

    return (
    <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>{/*-------Hero Block ---------*/}
            <Grid container direction="row" justify="flex-end" alignItems="center">
                <Grid item sm className={classes.headingItem}>
                    <Typography align="center" variant="h2">
                    Bringing west Coast Technology <br></br> to the Midwest
                    </Typography>
                    <Grid container justify="center" className={classes.buttonContainer}>
                        <Grid item>
                            <Button className={classes.estimateButton} variant="contained" component={Link} to="/estimate" onClick={()=>props.setValue(5)}>Free Estimate</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to="/revolution" onClick={()=>props.setValue(2)}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid  sm  item className={classes.animation}>
                <Lottie  options={defaultOptions} height={"100%"} width={"100%"}></Lottie>
                </Grid>
            </Grid>
        </Grid>
        <Grid item> {/*---------Custom Software Block--------------*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM?"center":undefined}>
            <Grid item style={{ marginLeft: matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}}>
                <Typography variant="h4">
                    Custom Software Development
                </Typography>
                
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Save Energy. Save Time. Save Money 
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                    Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration</span>
                </Typography>
                <Button variant="outlined"  className={classes.learnButton} component={Link} to="/customsoftware" onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>

            </Grid>
            <Grid item>
                <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon}></img>
            </Grid>
        </Grid>
        </Grid>

        <Grid item> {/*---------iOS/Android App Block--------------*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM?"center":"flex-end"}>
            <Grid item style={{textAlign:matchesSM?"center":undefined}}>
                <Typography variant="h4">
                    iOS/Android App Development
                </Typography>
                
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Extend Functionality. Extend Access. Increase Engagement.
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                    Integrate your web experience or create a standalone app {matchesSM ? null : <br/>}
                    with either mobile platform
                </Typography>
                <Button variant="outlined"  className={classes.learnButton} component={Link} to="/mobileapps" onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>

            </Grid>
            <Grid item style={{ marginRight: matchesSM?0:"5em"}}>
                <img className={classes.icon} alt="custom software icon" src={mobileAppsIcon}></img>
            </Grid>
        </Grid>
        </Grid>

        <Grid item> {/*---------Websites Block--------------*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM?"center":undefined}>
            <Grid item style={{ marginLeft: matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}}>
                <Typography variant="h4">
                    Website Development
                </Typography>
                
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More. Discover More . Sell More . 
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                    Optimized for Search Engines ,built for speed
                </Typography>
                <Button variant="outlined"  className={classes.learnButton} component={Link} to="/website" onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>

            </Grid>
            <Grid item>
                <img className={classes.icon} alt="website icon" src={websitesIcon}></img>
            </Grid>
        </Grid>
        </Grid>

        <Grid item> {/*Revolution Block  */} 
        <Grid container alignItems="center" justify="center" style={{height:"100em",marginTop:"12em"}}>
        <Card className={classes.revolutionCard}>
            <CardContent>
                <Grid container direction="column" style={{textAlign:"center"}}>
                    <Grid item>
                        <Typography variant="h3" gutterBottom>
                            The Revolution
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="subtitle1">
                            Visionary insights coupled with cutting-edge technology is a 
                            recipe for revolution 
                        </Typography>
                        <Button variant="outlined"  className={classes.learnButton} component={Link} to="/revolution" onClick={()=>props.setValue(1)}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        <div className={classes.revolutionBackground}></div>
        </Grid>
        
        </Grid>

        <Grid item>{/*---------------INFORMATION BLOCK-------------- */}
        <Grid container direction="row" style={{height:"80em"}} alignItems="center">
   
            <Grid item container style={{position:"absolute",textAlign:matchesXS?"center":"inherit"}} direction={matchesXS?"column":"row"} >
            <Grid item sm style={{marginLeft:matchesXS? 0 : matchesSM? "2em":"5em"}}>

                <Grid container direction="column" style={{marginBottom:matchesXS?"10em":0}}>
                    <Typography variant="h2" style={{color:"white"}}>
                        About Us
                    </Typography>
                    <Typography variant="subtitle2">
                        Lets get personal.
                    </Typography>
                    <Grid item>
                    <Button variant="outlined"  className={classes.learnButton} style={{color:"white",borderColor:"white"}} component={Link} to="/about" onClick={()=>props.setValue(3)}>
                        <span style={{marginRight:10}} > Learn More </span>
                        <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
                    </Button>
                    </Grid>
                
                </Grid>
            </Grid>
            <Grid item sm style={{marginRight : matchesXS? 0 : matchesSM? "2em":"5em",textAlign:matchesXS?"center":"right"}} >

<Grid container direction="column" >
    <Typography variant="h2" style={{color:"white"}}>
        Contact Us
    </Typography>
    <Typography variant="subtitle2">
        Say Hello!!.
    </Typography>
    <Grid item>
    <Button variant="outlined"  className={classes.learnButton} style={{color:"white",borderColor:"white"}} component={Link} to="/contact" onClick={()=>props.setValue(4)}>
        <span style={{marginRight:10}} > Learn More </span>
        <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
    </Button>
    </Grid>

</Grid>
</Grid>


            </Grid>
            <div className={classes.infoBackground}></div>
        </Grid>
        </Grid>

        <Grid item> {/*CALL TO ACTION */}
            <CallToAction 
            setValue={props.setValue}
            ></CallToAction>
        </Grid>
    </Grid>
    )
}