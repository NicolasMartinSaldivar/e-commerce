import React from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';



export default function NavBar(){
    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="logo"/>
                </div>
                  
                <ul>
                    <li><Button variant="contained" >Home</Button></li>
                    <li><Button variant="contained">Products</Button></li>
                    <li><Button variant="contained">Contact</Button></li>
                    <li><Button variant="contained" >About Us</Button></li>
                </ul>
            </nav>
        </AppBar>
    )
}