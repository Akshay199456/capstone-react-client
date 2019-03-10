import React from 'react';
import { Segment } from 'semantic-ui-react';

const LastFm = (props) =>{

	const articles = props.lastFmResults.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Image: <img src={((item.image)[3])['#text']} alt="Something"/></div>
				<div> Artist: {item.artist} </div>
				<div> Name: {item.name} </div>
				<div> Listeners: {item.listeners}</div>
				<div> <a href={item.url} target="_blank" rel="noopener noreferrer"> {item.name} </a> </div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> Last Fm Results </h1>
				{articles}
			</div> 
	);
}

export default LastFm;