import React from 'react';
import { Segment } from 'semantic-ui-react';

const LastFmTopArtists = (props) =>{

	const articles = props.topArtists.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Artist Image: <img src={((item.image)[4])['#text']} alt="Something"/></div>
				<div> Artist Name: {item.name} </div>
				<div> Listeners: {item.listeners}</div>
				<div> PlayCount: {item.playcount}</div>
				<div> <a href={item.url} target="_blank" rel="noopener noreferrer"> {item.name} </a> </div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> Top Artists </h1>
				{articles}
			</div> 
	);
}

export default LastFmTopArtists;