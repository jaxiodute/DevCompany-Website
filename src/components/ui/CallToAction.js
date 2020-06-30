import React from 'react';
import {Link} from 'react-router-dom';
import {Grid,Typography,Button,useMediaQuery} from '@material-ui/core' 
import{makeStyles,useTheme} from '@material-ui/core/styles'

import ButtonArrow from './ButtonArrow'

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles=makeStyles(theme=>({
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em",
        }
    },
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        backgroundRepeat :"no-repeat",
        height:"60em",
        width:"100%",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment:"inherit",
        }
    },
    estimate:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:80,
        width:205,
        backgroundColor:theme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight:"5em"
        ,marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginRight:0
        ,marginLeft:0,
        },
        "&:hover":{
            backgroundColor:theme.palette.secondary.light,
        },
        buttonContainer:{
            marginTop:"1em",
        }
    }
}));

export default function CallToAction(props)
{
    const classes = useStyles();
    const theme=useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid container  alignItems="center" className={classes.background} justify={matchesSM?"center":"space-between"} direction={matchesSM?"column":"row"}>
            <Grid item style={{marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":"inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software. <br/> Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                            Take advantage of the 21st centuary
                        </Typography>

                    </Grid>
                    <Grid container item justify={matchesSM?"center":undefined}>
                    <Button variant="outlined"  className={classes.learnButton}  component={Link} to="/revolution" onClick={()=>props.setValue(1)}>
        <span style={{marginRight:5}} > Learn More </span>
        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
    </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.estimate} style={{}} component={Link} to="/estimate" onClick={()=>props.setValue(5)}>
                    Free Estimate
                </Button>
            </Grid>

        
        </Grid>
    );
}