import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import  { Grid,Typography,Button,TextField, Dialog, DialogContent,useMediaQuery,CircularProgress,Snackbar} from '@material-ui/core'

import background from '../assets/background.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'

const useStyles=makeStyles(theme=>({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat :"no-repeat",
        height:"60em",
    },
    message:{
        border:`2px solid ${theme.palette.common.blue}`,
        marginTop:"5em",
        borderRadius:5,
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:45,
        width:245,
        fontSize:"1rem",
        backgroundColor:theme.palette.common.orange,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light,
        }
    }
}));

export default function Contact(){

    const classes=useStyles();
    const theme = useTheme();
    const matchesMD=useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS=useMediaQuery(theme.breakpoints.down("xs"))

    const [name,setName]=useState('');

    const [email,setEmail]=useState('');
    const [emailHelper,setEmailHelper] = useState('');

    const [phone,setPhone]=useState('');
    const [phoneHelper,setPhoneHelper] = useState('');

    const [message,setMessage]=useState('');

    const [open,setOpen] = useState(false);

    const [loading,setLoading] = useState(false);

    const [alert,setAlert]=useState({open:'false',message:"",backgroundColor:""})

    const onChange=event=>{
        let valid="";

        switch(event.target.id){
            case 'email':{
                setEmail(event.target.value);
                valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if(!valid)
                {
                    setEmailHelper("Invalid email")
                }
                else{
                    setEmailHelper('');
                }
                break;
            }
            case 'phone':{
                setPhone(event.target.value);
                valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if(!valid)
                {
                    setPhoneHelper("Invalid phone")
                }
                else{
                    setPhoneHelper('');
                }
                break;
            }
            default:{
                break;
            }
        }
    }
    
    const onConfirm=()=>{
        setLoading(true);
        axios.get('https://us-central1-material-ui-course-1e197.cloudfunctions.net/sendMail',
        {params:{
            name:name,
            email:email,
            phone:phone,
            message:message,
        }}
        )
        .then(res=>{
            setLoading(false);
            setOpen(false)
            setName('')
            setEmail("")
            setPhone("")
            setMessage("")
            setAlert({open:true,message:'Message Sent Successfully',backgroundColor:"#4BB543"})
        }).catch(err=>{console.log(err);setLoading(false);setAlert({open:true,message:'Message Declined !',backgroundColor:"#FF3232"})})
    }

    const buttonContent=(
        <React.Fragment>
        Send Message
        <img src={airplane} alt="airplane" style={{marginLeft:"1em"}}></img>
        </React.Fragment>
    )

    return(
        <Grid container direction="row">
            <Grid item container direction="column" justify="center"  alignItems="center" lg={3}>
                <Grid item>
                    <Grid container direction="column" >
                    <Grid item>
                    <Typography variant="h2" style={{lineHeight:1}}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" style={{color:theme.palette.common.blue}}>
                        We are waiting.
                    </Typography>
                </Grid>

                <Grid item container >
                    <Grid item style={{marginRight:"0.5em"}}>
                        <img src={phoneIcon} alt="phone"></img>
                    </Grid>
                    <Grid item>
                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}}>
                        999-8989878
                    </Typography>
                    </Grid>
                </Grid>

                <Grid item container >
                    <Grid item style={{marginRight:"0.5em",}}>
                        <img src={emailIcon} alt="email" style={{verticalAlign:"bottom"}}></img>
                    </Grid>
                    <Grid item>
                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}} >
                        agneljohn8@gmail.com
                    </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" style={{maxWidth:"20em"}}>
                    <Grid item>
                        <TextField 
                        label="Name"
                        fullWidth
                        id="name"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        ></TextField>
                    </Grid>

                    <Grid item>
                    <TextField 
                    fullWidth
                    label="Email" 
                    id="email"
                    error={emailHelper.length!==0}
                    helperText={emailHelper}
                    value={email}
                    onChange={onChange}
                    ></TextField>
                    </Grid>

                    <Grid>
                    <TextField 
                    fullWidth
                    label="Phone" 
                    error={phoneHelper.length!==0}
                    helperText={phoneHelper}
                    id="phone"
                    value={phone}
                    onChange={onChange}
                    ></TextField>
                    </Grid>

                </Grid>

                <Grid item style={{maxWidth:"20em"}}>
                    <TextField 
                    InputProps={{
                        disableUnderline:true
                    }}
                    value={message} 
                    className={classes.message}
                    multiline
                    rows={10}
                    fullWidth
                    id="message" 
                    onChange={(event)=>setMessage(event.target.value)}
                    
                    ></TextField>
                </Grid>
                <Grid item container justify="center" style={{marginTop:"2em"}}>
                    <Button variant="contained" className={classes.sendButton} disabled={name.length===0||message.length===0||phoneHelper.length!==0||emailHelper.length!==0}
                    onClick={()=>setOpen(true)}
                    >
                        Send Message
                        <img src={airplane} alt="airplane" style={{marginLeft:"1em"}}></img>
                    </Button>
                </Grid>
            
                    </Grid>
                </Grid>

            </Grid>

            <Dialog open={open} onClose={()=>setOpen(false)} style={{ zIndex:1302,}} PaperProps={{style:{
               
                paddingTop:"5em",
                paddingBottom:"5em",
                paddingLeft:matchesXS?0:"20em",
                paddingRight:matchesXS?0:"20em",}}}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>

                        </Grid>
                       
                        <Grid item container direction="column" style={{maxWidth:"20em"}}>
                    <Grid item>
                        <TextField 
                        label="Name"
                        fullWidth
                        id="name"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        ></TextField>
                    </Grid>

                    <Grid item>
                    <TextField 
                    fullWidth
                    label="Email" 
                    id="email"
                    error={emailHelper.length!==0}
                    helperText={emailHelper}
                    value={email}
                    onChange={onChange}
                    ></TextField>
                    </Grid>

                    <Grid>
                    <TextField 
                    fullWidth
                    label="Phone" 
                    error={phoneHelper.length!==0}
                    helperText={phoneHelper}
                    id="phone"
                    value={phone}
                    onChange={onChange}
                    ></TextField>
                    </Grid>

                </Grid>

                <Grid item style={{maxWidth:"20em"}}>
                    <TextField 
                    InputProps={{
                        disableUnderline:true
                    }}
                    value={message} 
                    className={classes.message}
                    multiline
                    rows={10}
                    fullWidth
                    id="message" 
                    onChange={(event)=>setMessage(event.target.value)}
                    
                    ></TextField>
                </Grid>
                        </Grid>

                    <Grid item container style={{marginTop:"2em"}} alignItems="center">
                        <Grid item>
                    <Button style={{fontWeight:300}} color="primary" onClick={()=>setOpen(false)}>
                        Cancel
                    </Button>
                    </Grid> 
                    <Grid item>
                    <Button variant="contained" className={classes.sendButton} disabled={name.length===0||message.length===0||phoneHelper.length!==0||emailHelper.length!==0}
                    onClick={onConfirm}
                    >
                        {loading?<CircularProgress size={30}/>: buttonContent}
                    </Button>
                    </Grid> 
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{backgroundColor:alert.backgroundColor}}} anchorOrigin={{vertical:"Top",horizontal:"center"}} onClose={()=>setAlert({...alert,open:false})} autoHideDuration={4000}></Snackbar>
            <Grid item container className={classes.background} lg={9}>

            </Grid>

        </Grid>
    );
;}