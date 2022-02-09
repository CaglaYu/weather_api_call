import React from "react"
import reactLogo from "./images/logo192.png"

import './nav.css';

export default function Nav(){
	return (
			<header>
				<nav className="nav">
					<img src={reactLogo} width="60px"/>
                    <ul className="nav-items">
				        <li>sefws</li>
				        <li>fafd</li>
			        </ul>       
				</nav>	
			</header>
		)
}



