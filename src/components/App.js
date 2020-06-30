import React,{useState} from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './ui/Header'
import theme from './ui/Theme'
import Footer from '../components/ui/Footer'
import LandingPage from '../components/LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApp from './MobileApp'
import Website from './Website'
import Revolution from './Revolution'
import About from './About'
import Contact from './Contact'
import Estimate from './Estimste'
function App() {
  const [selectedIndex,setSelectedIndex]=useState(0);
  const [value,setValue]=React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
      <Header 
      value={value}
      setValue={setValue}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      ></Header>

      <Switch>
        <Route path="/" exact 
        render={(props)=>
        
          <LandingPage
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></LandingPage>
        
        }
       ></Route>
        <Route path="/services" exact 
        
        render={(props)=>
        <Services
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}>
        </Services>
        }
        
        ></Route>

        <Route path="/customsoftware" exact 
        
        render={(props)=>
          < CustomSoftware
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></ CustomSoftware>
        }
        
        ></Route>

        <Route path="/mobileapps" exact 
         
         render={(props)=>
          < MobileApp
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></ MobileApp>
        }
        
        ></Route>
        <Route path="/websites" exact 
        
        render={(props)=>
          < Website
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></ Website>
        }
        
        
        ></Route>
        <Route path="/revolution" exact 
        
        render={(props)=>
          < Revolution
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></ Revolution>
        }

        ></Route>
        <Route path="/about" exact 
        
        render={(props)=>
          < About
          {...props}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          ></ About>
        }
        
        ></Route>
        <Route path="/contact" exact 
        
        render={(props)=>
          <Contact
            {...props}
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}>
          </Contact>
          }
        
        ></Route>
        <Route path="/estimate" exact 
        
        render={(props)=>
          <Estimate
            {...props}
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}>
          </Estimate>
          }
        
        ></Route>

      </Switch>
      <Footer
      value={value}
      setValue={setValue}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      ></Footer>
      </BrowserRouter>
      
      </ThemeProvider>
     
    
  );
}

export default App;
