import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {Grid,Typography,useMediaQuery} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimation from '../animations/documentsAnimation/data.js'
const useStyles=makeStyles(theme=>({
    heading:{
        maxWidth:"40em",
    },
    arrowContainer:{
        marginTop:"0.5em",
    },
    mainContainer:{
        paddingLeft:"5em",
        paddingRight:"5em",
        paddingTop:"2em",
        paddingBottom:"10em",
    },
    itemContainer:{
        maxWidth:"40em",
    }
}))

export default function Website(props)
{
    const classes=useStyles();

    const documentsOptions={
        loop:true,
        autoplay:true,
        animationData:documentsAnimation,
        rendererSettings:{
            preserveAscpectRatio : 'xMidYMid slice'
        }
    }

    return(
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row">
                <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
                    <IconButton component={Link} to="/services" onClick={()=>props.setSelectedIndex(0)}>
                        <img src={backArrow} alt="Back to Services Page"></img>
                    </IconButton>
                </Grid>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item >
                        <Typography variant="h2" >
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Whether we are replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph>
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                        </Typography>
                        <Typography variant="body1" paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </Typography>
                        <Typography variant="body1" paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem I
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item  className={classes.arrowContainer}>
                <IconButton component={Link} to="/mobileapps" onClick={()=>props.setSelectedIndex(2)}>
                    <img alt="forward image" src={forwardArrow}>

                    </img>
                </IconButton>
            </Grid>

            </Grid>

            <Grid item container direction="row" justify="center" style={{marginTop:"15em",marginBottom:"20em"}}>
                <Grid item container direction="column" alignItems="center" md style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">
                            Save Energy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="light bulb"></img>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">
                            Save Money
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash"></img>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center"style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">
                            Save Time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stop watch"></img>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction ="row">
                <Grid item container className={classes.itemContainer}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Digital Documents and Data
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body1" paragraph>
                            Whether we are replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Whether we are replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Whether we are replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions}></Lottie>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}