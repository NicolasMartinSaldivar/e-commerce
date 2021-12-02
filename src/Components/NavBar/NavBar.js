import React from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';



export default function NavBar(){
    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="logo"/>
                </div>
                  
                <ul>
                    <li><Button variant="outlined" >Home</Button></li>
                    <li><Button variant="outlined">Products</Button></li>
                    <li><Button variant="outlined">Contact</Button></li>
                    <li><Button variant="outlined" >About Us</Button></li>
                </ul>
                <div className="CartWidget">
                    <CartWidget />
                </div>
            </nav>
            
        </AppBar>
    )
}