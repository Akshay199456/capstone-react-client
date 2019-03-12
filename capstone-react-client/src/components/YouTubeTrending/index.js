import React from 'react';
import { Segment } from 'semantic-ui-react';

const YouTubeTrending = (props) =>{

	const videos = props.trendingVideos.map((item, index) =>{
		let videoEmbeddedLink = 'https://www.youtube.com/embed/'+item.id;
		return(
			<Segment key={index}>
				<iframe
					title="This is a unique title"
					width="560" 
					height="315" 
					src={videoEmbeddedLink} 
					frameBorder="0" 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
				<div> Channel Title: {item.snippet.channelTitle}</div>
				<div> Description: {item.snippet.description}</div>
				<div> Video Title: {item.snippet.title}</div>
				<div> Published At: {item.snippet.publishedAt}</div>
				<h3> Statistics: </h3>
				<div> Comment Count: {item.statistics.commentCount}</div>
				<div> Dislike Count: {item.statistics.dislikeCount}</div>
				<div> Like Count: {item.statistics.likeCount}</div>
				<div> View Count: {item.statistics.viewCount}</div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> YouTube Trending Videos </h1>
				{videos}
			</div> 
	);
}

export default YouTubeTrending;