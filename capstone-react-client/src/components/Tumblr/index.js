import React from 'react';
import { Segment } from 'semantic-ui-react';

const Tumblr = (props) =>{

	const articles = props.tumblrData.map((item, index) =>{
		if(item.type === 'photo')
		{
			return(
					<Segment raised key={index}>
						<div> Image: <img src={(item.photos)[0].original_size.url} alt="Something"/></div>
						<div> Blog Name: {item.blog_name} </div>
						<div> Description: {item.blog.description}</div>
						<div> Title: {item.blog.title}</div>
						<div> Date: {item.date} </div>
						<div> Post Url: <a href={item.post_url} target="_blank" alt="Article Image" rel="noopener noreferrer"> {item.blog_name} </a> </div>
					</Segment>
				);
		}

		else if(item.type === 'video'){
			return(
					<Segment raised key={index}>
						{ item.video !== undefined ?
							<div> Post Video: 
								<iframe
									title="This is a unique title"
									width="560" 
									height="315" 
									src={'https://www.youtube.com/embed/'+item.video.youtube.video_id} 
									frameBorder="0" 
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen>
								</iframe>		
							</div> : null
						}
						<div> Blog Name: {item.blog_name} </div>
						<div> Description: {item.blog.description}</div>
						<div> Title: {item.blog.title}</div>
						<div> Date: {item.date} </div>
					</Segment>
				);
		}

		else if(item.type === 'text' | item.type === 'quote')
		{
			return(
					<Segment raised key={index}>
						<div> Blog Name: {item.blog_name} </div>
						<div> Description: {item.blog.description}</div>
						<div> Title: {item.blog.title}</div>
						<div> Date: {item.date} </div>
						<div> Summary: {item.summary} </div>
						<div> Post Url: <a href={item.post_url} target="_blank" alt="Article Image" rel="noopener noreferrer"> {item.blog_name} </a> </div>
					</Segment>
				);
		}

		else if(item.type === 'link'){
			return(
				<Segment raised key={index}>
					<div> Link Image: <img src={(item.photos)[0].original_size.url} alt="Something"/></div>
					<div> Excerpt: {item.excerpt} </div>
					<div> Date: {item.date} </div>
					<div> Blog Name: {item.blog_name} </div>
					<div> Description: {item.blog.description}</div>
					<div> Title: {item.blog.title}</div>
					<div> Summary: {item.summary} </div>
					<div> Post Url: <a href={item.post_url} target="_blank" alt="Article Image" rel="noopener noreferrer"> {item.blog_name} </a> </div>
				</Segment>
			);
		}
	});

	return(
			<div> 
				<h1> Tumblr Articles </h1>
				{articles}
			</div> 
	);
}

export default Tumblr;