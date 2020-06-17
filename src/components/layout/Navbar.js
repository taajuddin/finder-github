import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar =({icon,title})=>{
		return(
			<div>	
				 <nav className="navbar bg-primary" > 
				 <h1>
					 <i className={icon} />{title}
				 </h1>
				 <ul className="nav_links">
						
						<li>
							<Link to='/' className="link">Home</Link>
						</li>
						<li>
							<Link to='/about' className="link">About</Link>
						</li>
						
				
				</ul>
				
     			 </nav> 
			</div>
			)

}
Navbar.defaultProps={
	title:'Github Finder',
	icon:'fab fa-github'
}
Navbar.propTypes={
	title:PropTypes.string.isRequired,
	icon:PropTypes.string.isRequired
}

export default Navbar 