import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image_url, box }) => {

	return(
			 <section class="tc pa2 pa5-ns">
             <article class="hide-child">
				 <div class="db pa2 bt relative ba b--black-20 mw5 center">
		             <img id='inputImage' src={image_url}  alt=" " />
		             <div className='bounding-box' style={{top: box.topRow, right: box.rightColumn, bottom: box.bottomRow, left: box.leftColumn}}></div>
				 </div>
		
			   </article>
             </section>
		);
}

export default FaceRecognition;