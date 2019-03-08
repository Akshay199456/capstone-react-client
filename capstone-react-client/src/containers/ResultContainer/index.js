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
		console.log("Query String from fetchYouTubeResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/youtube/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from youtube: ", response);

		if(response.ok){
			const parsedResponse = await response.json();
			console.log("ParsedResponse from Youtube: ", parsedResponse);

			const videoIdArray = [];
			const videos = parsedResponse.data.items;
			for (let i=0; i<videos.length; i++){
				console.log("Video ID: ", videos[i].id.videoId);
				const embedString = 'https://www.youtube.com/embed/'+videos[i].id.videoId;
				videoIdArray.push(embedString);
			}

			this.setState({
				youTubeVideos: videoIdArray
			});
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