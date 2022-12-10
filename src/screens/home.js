import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setClientToken } from '../spotify';
import Login from './login';
import Library from './library';
import Playlist from './playlist';
import './home.css';
import Sidebar from '../components/sidebar';


export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);


  return !token ? (
      <Login/>
    ) : (    
    <div className='main-body'>
        <Router>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Library/>}/>
                <Route path='/playlist' element={<Playlist/>}/>
            </Routes>
        </Router>
    </div>
    ) 
}
