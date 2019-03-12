import React from 'react';

import YouTube from '../YouTube';
import Tumblr from '../Tumblr';


const EntertainmentComponent = (props) =>{
	return(
			<div> 
				{ props.youTubeVideosLength === 0 ? null : <YouTube youTubeVideos={props.youTubeVideos}/>}
				<button onClick={props.travelYouTube}> YouTube </button>
				{ props.tumblrDataLength === 0 ? null : <Tumblr tumblrData={props.tumblrData}/>}
				
			</div> 
	);
}

export default EntertainmentComponent;