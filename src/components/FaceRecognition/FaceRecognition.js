import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image_url, box,imagePreviewUrl }) => {

	return(
			 <section className="tc pa2 pa5-ns">
             <article className="hide-child">
				 <div className="db pa2 bt relative ba b--black-20 mw5 center">
		             <img id='inputImage' src={imagePreviewUrl}  alt=" " />
		             <div className='bounding-box'
			              style={{top: box.topRow,
			               	      right: box.rightColumn, 
			             	      bottom: box.bottomRow, 
			             	      left: box.leftColumn}}>
		             </div>
				 </div>
			   </article>
             </section>
		);
}

export default FaceRecognition;