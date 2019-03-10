import React from 'react';
import { Segment } from 'semantic-ui-react';

const TechCrunch = (props) =>{

	const articles = props.techCrunchArticles.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Image: <img src={item.urlToImage} alt="Something"/></div>
				<div> Published Date: {item.publishedAt} </div>
				<div> Author: {item.author}</div>
				<div> Title: {item.title}</div>
				<div> Content: {item.content} </div>
				<div> Description: {item.description}</div>
				<div> Article Link: <a href={item.url} target="_blank" alt="Article Image" rel="noopener noreferrer"> {item.source.name} </a> </div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> Tech Crunch Articles </h1>
				{articles}
			</div> 
	);
}

export default TechCrunch;