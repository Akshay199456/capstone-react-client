import React from 'react';

import YouTubeMusic from '../YouTubeMusic';
import LastFm from '../LastFm';


const MusicComponent = (props) =>{
	return(
			<div> 
				{ props.youTubeMusicVideosLength === 0 ? null : <YouTubeMusic youTubeMusicVideos={props.youTubeMusicVideos}/>}
				<button onClick={props.travelYouTubeMusic}> YouTube Music </button>
				{ props.lastFmResultsLength === 0 ? null : <LastFm lastFmResults={props.lastFmResults}/>}
				<button onClick={props.travelLastFm}> Last Fm </button>
			</div> 
	);
}

export default MusicComponent;