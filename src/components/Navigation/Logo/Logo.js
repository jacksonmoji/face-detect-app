import React from 'react';
import Tilt from 'react-tilt';
import logo from './robot.png';

const Logo = () => {

	return(
			<div className="ma2 mt0">
				<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
					<div className="Tilt-inner"> <img src={logo} alt='robot AI' /></div>
				</Tilt>

			</div>
		);
}

export default Logo;