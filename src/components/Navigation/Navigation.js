import React from 'react';
import Logo from './Logo/Logo';

const Navigation = () => {

	return(
		<div>
	      
			<nav style={{display: 'flex'}}>
  			<Logo/>
			<p style={{display: 'flex',justifyContent:'flex-end'}} className='f3 link dim black pa2 pointer'> Sign Out</p>
			</nav>
		</div>
		);

}

export default Navigation;