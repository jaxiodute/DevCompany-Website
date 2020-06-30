import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {Grid,Typography,Button,useMediaQuery} from '@material-ui/core'

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

import ButtonArrow from './ui/ButtonArrow'
const useStyles=makeStyles(theme=>({
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
    serviceContainer:{
        marginTop:"10em",
        [theme.breakpoints.down("sm")]:{
            padding:25,
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
}))

export default function Services(props)
{
    const classes=useStyles();
    const theme=useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid container direction="column">
            <Grid item style={{marginLeft:matchesSM?0:"5em",}}>
                <Typography gutterBottom align={matchesSM?"center":undefined} variant="h2">
                    Services
                </Typography>
            </Grid>
                    <Grid item> {/*---------iOS/Android App Block--------------*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM?"center":"flex-end"} style={{marginTop:matchesSM?"1em":"5em",}}>
            <Grid item style={{textAlign:matchesSM?"center":undefined,width:matchesSM?undefined:"35em"}}>
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
            <Grid item style={{ marginRight: matchesSM?0:"5em",width:matchesSM?undefined:"35em"}}>
                <img className={classes.icon} alt="mobile icon" src={mobileAppsIcon} width="250em"></img>
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


        <Grid item> {/*---------Websites Block--------------*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM?"center":"flex-end"} style={{marginBottom:"10em"}}>
            <Grid item style={{textAlign:matchesSM?"center":undefined,width:matchesSM?undefined:"35em"}}>
                <Typography variant="h4">
                    Website Development
                </Typography>
                
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More. Discover More . Sell More . 
                </Typography>
                

                <Typography variant="subtitle1" className={classes.subtitle}>
                    Optimized for Search Engines ,built for speed
                </Typography>
                <Button variant="outlined"  className={classes.learnButton} component={Link} to="/websites" onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}}>
                                <span style={{marginRight:10}} > Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>

            </Grid>
            <Grid item style={{ marginRight: matchesSM?0:"5em",width:matchesSM?undefined:"35em"}}>
                <img className={classes.icon} alt="website icon" src={websitesIcon} width="250em"></img>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
    );
}
