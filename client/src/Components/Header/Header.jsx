import React from 'react'
import  KeyboardArrowDownIcon  from "@mui/icons-material/KeyboardArrowDown";
import "./Header.css"

export const Header = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="img">
                    <img src="https://i.pinimg.com/originals/b1/92/4d/b1924dce177345b5485bb5490ab3441f.jpg" alt="" />
                </div>
                <div className="item">
                    Online
                </div>
                <div className="item">
                    Single Player
                </div>
                <div className="item">
                    MultiPle Player
                </div>
            </div>
            <div className="center">
                <h2>NEXUS GAMZY STORE</h2>
            </div>
            <div className='right'>
                <div className="item">
                    HomePage
                </div>
                <div className="item">
                    New
                </div>
                <div className='item'>
                    About
                </div>
                <div className='item'>
                    Stores
                </div>
            </div>
        </div>
    </div>
    
  )
}
