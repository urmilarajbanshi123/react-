import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResponsiveAppBar from './User/UserLayout';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {
 return (<>
  <Router>
    <Routes>
      <Route path="" element={<ResponsiveAppBar/>}></Route>
    </Routes>
  </Router>
  </>
 );
}

export default App;
