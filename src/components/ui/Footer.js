import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import {Grid,Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor: theme.palette.common.blue,
        width:"100%",
        zIndex:1302,
        position:"relative",
    },
    adornment:{
        width:"25em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:
        {
            width:"21em"
        },
        [theme.breakpoints.down("xs")]:
        {
            width:"15em"
        },

    },
    mainContainer:{
        position:"absolute",

    },
    link:{
        color:"white",
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
        textDecoration:"none"
,    },
    gridItem:{
        margin:"3em"
    },
    icon:{
        [theme.breakpoints.down("xs")]:{
            height:"2.5em",
            width:"2.5em",
        },
        height:"4em",
        width:"4em",
    },
    socialContainer:
    {
        position:"absolute",
        marginTop:"-6em",
        right:"1.5em",
        [theme.breakpoints.down("xs")]:{
           right: "0.6em",
        },

    }
}));
export default function Footer(props)
{
    const classes=useStyles();

    return <footer className={classes.footer}>
        <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/" className={classes.link} onClick={()=>props.setValue(0)}>
                        Home
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/services" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}}>
                        Services
                    </Grid>
                    <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}>
                        Custom Software Development
                    </Grid>
                    <Grid item component={Link} to="/mobileapps" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>
                    iOS/Android App
                    </Grid>
                    <Grid item component={Link} to="/websites" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>
                        Website Development
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/revolution" className={classes.link} onClick={()=>props.setValue(2)}>
                        The Revolution
                    </Grid>
                    <Grid component={Link} to="/revolution" item className={classes.link} onClick={()=>props.setValue(2)}>
                        Vision
                    </Grid>
                    <Grid component={Link} to="/revolution" item className={classes.link} onClick={()=>props.setValue(3)}>
                        Technology
                    </Grid>
                    <Grid component={Link} to="/revolution" item className={classes.link} onClick={()=>props.setValue(3)}>
                        Process
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid component={Link} to="/about" item className={classes.link} onClick={()=>props.setValue(4)}>
                        About Us
                    </Grid>
                    <Grid component={Link} to="/about" item className={classes.link} onClick={()=>props.setValue(4)}>
                        History
                    </Grid>
                    <Grid component={Link} to="/about" item className={classes.link} onClick={()=>props.setValue(4)}>
                        Team
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid component={Link} to="/contact" item className={classes.link} onClick={()=>props.setValue(5)}>
                        Contact Us
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        </Hidden>
        
        <img className={classes.adornment} alt="black decorative" src={footerAdornment}>
        </img>
        <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
            <Grid item component="a" href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" src={facebook} className={classes.icon}></img>
            </Grid>
            <Grid item component="a" href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                <img alt="twitter logo" src={twitter} className={classes.icon}></img>
            </Grid>
            <Grid item component="a" href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" src={instagram} className={classes.icon}></img>
            </Grid>
        </Grid>
    </footer>
}