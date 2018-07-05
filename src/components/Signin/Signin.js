import React from 'react';

const Signin = ({ image_url, box }) => {

	return(
			<div className='center ma ' width='500px' height='500px'>
				<div className='absolute mt2'>
					<img id='inputImage' src={image_url} alt=' ' />
					<div className='bounding-box' style={{top: box.topRow, right: box.rightColumn, bottom: box.bottomRow, left: box.leftColumn}}></div>
				</div>
			</div>
		);
}

export default Signin;