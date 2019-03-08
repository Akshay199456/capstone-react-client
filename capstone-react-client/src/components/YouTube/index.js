import React from 'react';

const YouTube = (props) =>{

	const videos = props.youTubeVideos.map((item, index) =>{
		return(
			<div key={index}>
				<iframe
					title="This is a unique title"
					width="560" 
					height="315" 
					src={item} 
					frameBorder="0" 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
			</div>
		);
	});

	return(
			<div> 
				<h1> YouTube Videos </h1>
				{videos}
			</div> 
	);
}

export default YouTube;