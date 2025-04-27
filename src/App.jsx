import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import Navbar from './cpmponent/Navbar.jsx';
import Services from './cpmponent/Services.jsx';
import Slider from './cpmponent/Slider.jsx';
import InfiniteSlider from './cpmponent/InfiniteSlider.jsx';
import Main from './cpmponent/Main.jsx';
import Bottom from './cpmponent/Bottom.jsx';
import Form1 from './cpmponent/Form1.jsx';
import About from './cpmponent/About.jsx';
import ContactUs from './cpmponent/ContactUs.jsx';
import Privacy from './cpmponent/Privacy.jsx'
import PopForm from './cpmponent/PopForm.jsx';

import { Fab, ThemeProvider, createTheme } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Route, Router, Routes } from 'react-router-dom';



// Create a custom theme
const theme = createTheme();

function App() {
  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const location=useLocation()

  const toggleIcons = () => {
    setIsIconsVisible(!isIconsVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', position: 'fixed' }}>
        {/* Fab=floating action button */}
        <Fab
          color="primary"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
          onClick={toggleIcons}
        >
          <MessageIcon />
        </Fab>

        
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Fab
            color="success"
            style={{
              transform: isIconsVisible ? 'translateY(-80px) scale(1)' : 'translateY(0) scale(0)',
              opacity: isIconsVisible ? 1 : 0,
              transition: 'transform 0.5s ease, opacity 0.3s ease',
            }}
            onClick={()=>{
              window.open('https://wa.me/9639753716','_blank')
            }}
          >
            <WhatsAppIcon/>
          </Fab>
          <Fab
            color="secondary"
            style={{
              transform: isIconsVisible ? 'translateY(-70px) scale(1)' : 'translateY(50) scale(0)',
              opacity: isIconsVisible ? 1 : 0,
              transition: 'transform 0.5s ease, opacity 0.3s ease',
            }}
            onClick={()=>{
              window.open('tel:+9639753716','_self')
            }}
          >
            <CallIcon  />
          </Fab>
        </div>
      </div>

      {location.pathname==='/' && <Navbar/>}


      
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Services />
              <Slider />
              <InfiniteSlider />
              <Main />
              <Bottom />
              <Form1 />
            </>
          }
        />

       
        <Route path="/about" element={<About />} />
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/PopForm' element={<PopForm/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;