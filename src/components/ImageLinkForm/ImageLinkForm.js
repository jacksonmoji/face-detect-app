import React from 'react';

const ImageLinkForm = ({ onInputChange,onSubmitClick}) => {

	return(
			<div>
				<p className='f5'> this image link will detect faces, its fun give it a try :) </p>
			<div className='center'> 
				<div className='ma4 pv4'>
					<input onChange={onInputChange} className='f2 pv1 w-70 center' type='text'/>
					<button onClick={onSubmitClick} className='w-40 grow f4 link ph3 green pv1 bg-white'>Detect</button> 
				</div>
			</div>
			</div>
		);
}

export default ImageLinkForm;