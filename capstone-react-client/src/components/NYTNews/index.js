import React from 'react';
import { Segment } from 'semantic-ui-react';

const NYTNews = (props) =>{

	const articles = props.nytArticles.map((item) =>{
		console.log("Multimedia: ", item.multimedia);
		return(
			<Segment raised key={item._id}>
				{ item.multimedia.length !== 0 ? <div> Image: <img src={"https://static01.nyt.com/"+(item.multimedia)[0].url}/></div> : null}
				<div> Published date: {item.pub_date} </div>
				<div> Section Name: {item.section_name} </div>
				<div> Headline: {item.headline.main}</div>
				<div> Lead Paragraph: {item.lead_paragraph}</div>
				<div> <a href={item.web_url} target="_blank"> WebLink </a> </div>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> NYT Articles </h1>
				{articles}
			</div> 
	);
}

export default NYTNews;