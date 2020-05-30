import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'
const Navbar =({icon,title})=>{
		return(
			<div>
				<header className="header">
				<h3><i className ={icon} /></h3><h3 className="h3">{title} </h3>
						
				 <nav > 
				 <ul className="nav_links">
						
						<li>
							<Link to='/' className="link">Home</Link>
						</li>
						<li>
							<Link to='/about' className="link">About</Link>
						</li>
						
				
				</ul>
				
     			 </nav> 
				  </header>
			</div>
			)

}
Navbar.defaultProps={
	title:'Github Finder',
	icon:'fa fa-github'
}
Navbar.propTypes={
	title:PropTypes.string.isRequired,
	icon:PropTypes.string.isRequired
}

export default Navbar 