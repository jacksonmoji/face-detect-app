import React from 'react';

const ImageLinkForm = ({ onInputChange,onSubmitClick}) => {

	return(
			<div>
				<p className='f5'> this image link will detect faces, its fun give it a try :) </p>
			<div className='center'> 
				<div className='ma2 pv2'>
					<input onChange={onInputChange} className='f2 pv1 w-70 center' type='text'/>
					<button onClick={onSubmitClick} className=" w-40 grow link ph3 pv1 bg-animate bg-dark-blue hover-bg-blue white f4 br1" 
					>Detect</button> 
				</div>
			</div>
			</div>
		);
}

export default ImageLinkForm;