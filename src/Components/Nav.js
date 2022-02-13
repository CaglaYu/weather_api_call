import React from "react"
import myLogo from "../images/butter1.png"
import {SocialIcon}  from 'react-social-icons'


import './nav.css';


export default function Nav(){
	return (
				<nav>
					{/*	<img src={reactLogo} width="60px"/>
                    	<ul className="nav-items">
				        	<li>HOME</li>
				        	<li>TOPICS</li>
							<li>COMMUNITY</li>						
						</ul>   */
					}
					<div className="grid0">
						<img src={myLogo}  className="nav--icon"/>
						<div className="grid">
							<h3 className="nav--logo_text elegantshadow">TRANSFORMATIONS </h3>
							<h4 className="nav--subtitle">Before & After Photos</h4>  
						</div>
						<div className="grid">
							<div>
								<SocialIcon className="nav--social" url="https://twitter.com/jaketrent" 
								style={{ height: 28, width: 28 }} bgColor="#f88d13" />
								<SocialIcon className="nav--social" url="https://facebook.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />
								<SocialIcon className="nav--social" url="https://instagram.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />	
								<SocialIcon className="nav--social" url="https://youtube.com/jaketrent" 
								style={{ height: 28, width: 28 }}  bgColor="#f88d13" />															
							</div>	
							
						</div>
						 
					</div>	
				</nav>	
		)
}



