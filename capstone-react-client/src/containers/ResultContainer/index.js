import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import YouTube from '../../components/YouTube';

class ResultContainer extends Component{
	constructor(){
		super();
		
		this.state ={
			queryString: localStorage.getItem('queryString'),
			youTubeVideos: []
		}
	}

	componentDidMount(){
		this.fetchYouTubeResults();
	}


	fetchYouTubeResults = async () => {
		const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+this.state.queryString+'&key=AIzaSyBCCWqoHDi9zuS6M-i8yXxvkZ8esqp3bX8',{
			credentials: 'include'
		});

		console.log("Response from YouTube: ", response);

		if(response.ok){
			const parsedResponse = await response.json();
			console.log("ParsedResponse from Youtube: ", parsedResponse);

			const videoIdArray = [];
			const videos = parsedResponse.items;
			for (let i=0; i<videos.length; i++){
				console.log("Video ID: ", videos[i].id.videoId);
				const embedString = 'https://www.youtube.com/embed/'+videos[i].id.videoId;
				videoIdArray.push(embedString);
			}

			this.setState({
				youTubeVideos: videoIdArray
			})
		}
	}

	render(){
		console.log("State from Result Container: ", this.state);
		return(
			<div>
				<Navbar/>
				Welcome to the ResultContainer! Your Query String was <strong> {this.state.queryString} </strong>
				{ this.state.youTubeVideos.length === 0 ? null : <YouTube youTubeVideos={this.state.youTubeVideos}/>}
			</div>
		);
	}
}

export default ResultContainer;