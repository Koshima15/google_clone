import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
export default function Home() {
    return (
        <div className="home">
            {/* <h1>home page</h1> */}
            <div className="homeHeader">
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>about</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="homeBody ">
                <img
                    src='https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
                    alt="google logo"
                    />
                    <div className='home__inputContainer'>
                        {/* {search} */}
                    </div>
            </div>
        </div>
    )
}
