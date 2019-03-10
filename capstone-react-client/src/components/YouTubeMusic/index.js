import React from 'react';
import { Segment } from 'semantic-ui-react';

const YouTubeMusic = (props) =>{
	console.log("Props from YouTube Music:", props);
	const videos = props.youTubeMusicVideos.map((item, index) =>{
		console.log("Video ID: https://www.youtube.com/embed/"+item.id.videoId);
		return(
			<Segment raised key={index}>
				<iframe
					title="This is a unique title"
					width="560" 
					height="315" 
					src={'https://www.youtube.com/embed/'+item.id.videoId} 
					frameBorder="0" 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
				<div> Channel Title: {item.snippet.channelTitle} </div> 
				<div> Description: {item.snippet.description} </div> 
				<div> Title: {item.snippet.title}</div>
				<div> Published At: {item.snippet.publishedAt}</div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> YouTube Music Videos </h1>
				{videos}
			</div> 
	);
}

export default YouTubeMusic;