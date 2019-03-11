import React from 'react';
import { Segment } from 'semantic-ui-react';

const TrendingNewsAPI = (props) =>{

	const articles = props.topHeadlines.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Image: <img src={item.urlToImage} alt="Something"/></div>
				<div> Source: {item.source.name}</div>
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
				<h1> Trending News API Articles </h1>
				{articles}
			</div> 
	);
}

export default TrendingNewsAPI;