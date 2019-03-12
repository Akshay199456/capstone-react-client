import React from 'react';
import { Segment } from 'semantic-ui-react';

const LastFmTopTracks = (props) =>{

	const articles = props.topTracks.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Artist Image: <img src={((item.image)[3])['#text']} alt="Something"/></div>
				<div> Artist: {item.artist.name} </div>
				<div> <a href={item.artist.url} target="_blank" rel="noopener noreferrer"> {item.artist.name} </a></div>
				<div> Track Name: {item.name} </div>
				<div> Listeners: {item.listeners}</div>
				<div> PlayCount: {item.playcount}</div>
				<div> <a href={item.url} target="_blank" rel="noopener noreferrer"> {item.name} </a> </div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> Top Tracks </h1>
				{articles}
			</div> 
	);
}

export default LastFmTopTracks;