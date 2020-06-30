import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu"


import IconButton from "@material-ui/core/IconButton"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,

    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme=>({
   toolbarMargin:{
       ...theme.mixins.toolbar,
       marginBottom: "3em",
       [theme.breakpoints.down("md")]:{
           marginBottom: "2em"
       },
       [theme.breakpoints.down("xs")]:{
        marginBottom: "1.25em"
       },

   },
   logo:{
       height: "8em",
       [theme.breakpoints.down("md")]:{
           height: "7em"
       },
       [theme.breakpoints.down("xs")]:{
        height: "5.5em"
    }

   },
   logoContainer:{
       padding:0,
       "&:hover":{
           backgroundColor:"transparent",
       }
       
},
   tabContainer:{
       marginLeft: "auto",
   },
   tab :{
       ...theme.typography.tab,
       minWidth: 10,
       marginLeft: "25px",
   },
   button:{
       ...theme.typography.estimate,
       borderRadius:"50px",
       marginLeft : "50px",
       marginRight : "25px",
       height : "45px",
       "&:hover":{
        backgroundColor:theme.palette.secondary.light,
    }
       
   },
   menu:
   {
       backgroundColor:theme.palette.common.blue,
       color:"white",
       borderRadius:0,
   },
   menuItem:{
       ...theme.typography.tab,
       opacity:0.7,
       "&:hover":{
           opacity:1,
       }
   },
   drawerIcon:{
       height:"50px",
       width: "50px",
   },
   drawerIconContainer:{
       marginLeft: "auto",
       "&:hover":{
           backgroundColor: "transparent"
       }
   },
   drawer:{
    backgroundColor:theme.palette.common.blue,
   },
   drawerItem:{
       ...theme.typography.tab,
       color:"white",
       opacity:0.7,
   },
   drawerItemEstimate:{
       backgroundColor:theme.palette.common.orange,
   },
  drawerItemSelected:{
      "& .MuiListItemText-root":{
          opacity:1,
      },
  },
  appbar:{
      zIndex : theme.zIndex.modal+1, 
  }
  }));

export default function Header(props){
    const classes= useStyles();
    const theme=useTheme();

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer,setOpenDrawer] = useState(false);
   
    const [anchoerEl,setAnchorEl]=useState(null);
    const [openMenu,setOpenMenu]=useState(false);
  

    const handleChange = (e,newvalue)=>{
        props.setValue(newvalue);
    }

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleClose=(e)=>{
        setAnchorEl(null);
        setOpenMenu(false);
    }
    const handleMenuItemClick=(e,i)=>{
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }
    const menuOptions=[
        {name:"Services",link:"/services",activeIndex:1,selectedIndex: 0},
        {name:"Custome Software Development",link:"/customsoftware",activeIndex:1,selectedIndex: 1},
        {name:"iOS/Android App Development",link:"/mobileapps",activeIndex:1,selectedIndex: 2},
        {name:"Website Development",link:"/websites",activeIndex:1,selectedIndex: 3},
    ];

    const routes = [
        {name:"Home", link : "/",activeIndex:0 },
        {name:"Services", link : "/sevices",activeIndex:1,ariaOwns:anchoerEl?"simple-menu":undefined,ariaPopup:anchoerEl?"true":undefined,mouseOver:(event)=>handleClick(event)},
        {name:"The Revolution", link : "/revolution",activeIndex:2},
        {name:"About Us", link : "/about",activeIndex:3},
        {name:"Contact Us", link : "/contact",activeIndex:4}    ,
    ]
    useEffect(()=>{

        [...menuOptions, ...routes].forEach(route =>
            {
                switch(window.location.pathname){
                    case `${route.link}`:
                        if( props.value !== route.activeIndex){
                            props.setValue(route.activeIndex)
                            if(route.selectedIndex && route.selectedIndex !== props.selectedIndex)
                            {
                                props.setSelectedIndex(route.selectedIndex)
                            }
                        }
                        break;
                    case '/estimate':{
                        props.setValue(5);
                        break;
                    }
                    default:
                        break;
                }
            }
            )

        // switch(window.location.pathname){
        //     case "/":
        //         if(value !== 0){
        //             setValue(0)
        //         }
        //         break;
        //     case "/services":
        //         if(value !== 1){
        //             setValue(1)
        //             setSelectedIndex(0)
        //         }
        //         break;
        //     case "/customsoftware":
        //         if(value !== 1){
        //             setValue(1)
        //             setSelectedIndex(1)
        //         }
        //         break;
        //     case "/mobileapps":
        //         if(value !== 1){
        //             setValue(1)
        //             setSelectedIndex(2)
        //         }
        //         break;
        //     case "/websites":
        //         if(value !== 1){
        //             setValue(1)
        //             setSelectedIndex(3)
        //         }
        //         break;
        //     case "/revolution":
        //         if(value !== 2){
        //             setValue(2)
        //         }
        //         break;
        //     case "/about":
        //         if(value !== 3){
        //             setValue(3)
        //         }
        //         break;
        //     case "/contact":
        //         if(value !== 4){
        //             setValue(4)
        //         }
        //         break;
        //     case "/estimate":
        //         if(value !== 5){
        //             setValue(5)
        //         }
        //         break;    
        //     default:
        //         break;
        // }
    },[props.value,menuOptions,props.selectedIndex,routes,props],);

    const tabs = (
        <React.Fragment>
            <Tabs 
       value={props.value} 
       onChange={handleChange} 
       className={classes.tabContainer}
       indicatorColor = "primary"
       >
           {routes.map((route,index)=>
               <Tab 
               key={`${route}${index}`}
               className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}>

               </Tab>
           )}

           {/* <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
           <Tab 
           aria-owns={anchoerEl?"simple-menu":undefined}
           aria-haspopup={anchoerEl?"true":undefined}
           onMouseOver={(event)=>handleClick(event)}
           className={classes.tab} component={Link} to="/services" label="Services"></Tab>
           <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"></Tab>
           <Tab className={classes.tab} component={Link} to="/about" label="About Us"></Tab>
           <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"></Tab> */}
           
       </Tabs>
       <Button component={Link} to="/estimate" onClick={()=>props.setValue(5)} variant="contained" color="secondary" className={classes.button}>
               Free Estimate
            </Button>
        <Menu style={{zIndex:1302}} id="simple-menu" anchorEl={anchoerEl} open={openMenu} onClose={handleClose} MenuListProps={{onMouseLeave:handleClose}} classes={{paper:classes.menu}} elevation={0} keepMounted>
           {menuOptions.map((option,i)=>
               <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(event)=>{handleMenuItemClick(event,i);props.setValue(1);handleClose()}} selected={i === props.selectedIndex && props.value === 1}>
               {option.name}
               </MenuItem>
           )}
            </Menu>
        </React.Fragment>
    );

    const drawer=(
        <React.Fragment>
            <SwipeableDrawer 
            classes={{paper:classes.drawer}}
            disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}>
                
                <div className={classes.toolbarMargin}></div>
                <List disablePadding>

                    {routes.map(route=>
                    <ListItem 
                    key={`${route}${route.activeIndex}`}
                    classes={{selected:classes.drawerItemSelected}}
                    divider button component={Link} to={route.link} selected={props.value === route.activeIndex} onClick={()=>{setOpenDrawer(false);props.setValue(route.activeIndex)}}>
                        <ListItemText  disableTypography  className={classes.drawerItem}>
                           
                            {route.name}
                        </ListItemText>
                    </ListItem>
                    )}

                    {/* <ListItem 

                    selected={value === 0}
                    onClick={()=>{setOpenDrawer(false);setValue(0)}} divider button component={Link} to="/">
                        <ListItemText  className={value === 0 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem 
                    selected={value === 1}
                    onClick={()=>{setOpenDrawer(false);setValue(1)}} divider button component={Link} to="/services">
                        <ListItemText className={value === 1 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem  
                    selected={value === 2}
                    onClick={()=>{setOpenDrawer(false);setValue(2)}} divider button component={Link} to="/revolution">
                        <ListItemText className={value === 2 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem  
                    selected={value === 3}
                    onClick={()=>{setOpenDrawer(false);setValue(3)}} divider button component={Link} to="/about">
                        <ListItemText className={value === 3 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem  
                    selected={value === 4}
                    onClick={()=>{setOpenDrawer(false);setValue(4)}} divider button component={Link} to="/contact">
                        <ListItemText className={value === 4 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                    </ListItem> */}
                    <ListItem  
                    classes={{root: classes.drawerItemEstimate,selected:classes.drawerItemSelected}}
                    selected={props.value === 5}
                    className={classes.drawerItemEstimate} onClick={()=>{setOpenDrawer(false);props.setValue(5)}} divider button component={Link} to="/estimate">
                        <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return(
        <React.Fragment>
        <ElevationScroll>
<AppBar className = {classes.appbar}>
    <Toolbar disableGutters>
        <Button component={Link} to="/" className={classes.logoContainer} onClick={()=>handleChange(0)} disableRipple>
       <img className={classes.logo} src={logo} alt="company logo"></img>
       </Button>
       {matches ? drawer : tabs}
    </Toolbar>
</AppBar>

</ElevationScroll>
<div className={classes.toolbarMargin}/>
</React.Fragment>
    );

}