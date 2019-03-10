import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import YouTube from '../../components/YouTube';
import NYTNews from '../../components/NYTNews';
import NewsAPI from '../../components/NewsAPI';
import TechCrunch from '../../components/TechCrunch';
import Tumblr from '../../components/Tumblr';
import YouTubeMusic from '../../components/YouTubeMusic';

class ResultContainer extends Component{
	constructor(){
		super();
		
		this.state ={
			queryString: localStorage.getItem('queryString'),
			youTubeVideos: [],
			nytArticles: [],
			newsAPIArticles: [],
			techCrunchArticles: [],
			tumblrData: [],
			youTubeMusicVideos: []
		}
	}

	componentDidMount(){
		// this.fetchYouTubeResults();
		// this.fetchNYTNewsResults();
		// this.fetchNewsAPIResults();
		// this.fetchTechCrunchResults();
		// this.fetchMusixMatchResults();
		// this.fetchTumblrResults();
		this.fetchYouTubeMusicResults();
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

			// All the data associated with the search is stored in parsedResponse.data
			const videos = parsedResponse.data.items;
			for (let i=0; i<videos.length; i++){
				if(videos[i].id.videoId !== undefined){
					console.log("Video ID: ", videos[i].id.videoId);
					const embedString = 'https://www.youtube.com/embed/'+videos[i].id.videoId;
					videoIdArray.push(embedString);
				}
			}

			this.setState({
				youTubeVideos: videoIdArray
			});
		}
	}

	fetchNYTNewsResults = async () =>{
		console.log("Query String from fetchNYTNewsResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/nytNews/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from NYT News: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse.data.response
			const articles = parsedResponse.data.response.docs;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				nytArticles: data
			});
		}
	}


	fetchNewsAPIResults = async () =>{
		console.log("Query String from fetchNewsAPIResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/newsApi/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from Tech Crunch News: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse.data
			const articles = parsedResponse.data.articles;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				newsAPIArticles: data
			});
		}
	}



	fetchTechCrunchResults = async () =>{
		console.log("Query String from fetchTechCrunchResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/techcrunch/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from Tech Crunch News: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse.data
			const articles = parsedResponse.data.articles;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				techCrunchArticles: data
			});
		}
	}



	fetchMusixMatchResults = async () =>{
		console.log("Query String from fetchMusixMatchResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/musixmatch/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from Musix MAtch News: ", response);
		const parsedResponse = await response.json();
		console.log('Parsed Response: ', parsedResponse);
		// if(response.ok){
		// 	const parsedResponse = await response.json();
		// 	console.log('Parsed Response: ', parsedResponse);

		// 	const data = [];

		// 	// All the data associated with the search is stored in parsedResponse.data
		// 	const articles = parsedResponse.data.articles;
		// 	for(let i=0; i<articles.length; i++){
		// 		// console.log("Article Title: ", articles[i].headline.main);
		// 		data.push(articles[i]);
		// 	}

		// 	console.log("Data: ", data);
		// 	this.setState({
		// 		techCrunchArticles: data
		// 	});
		// }
	}

	fetchTumblrResults = async () =>{
		console.log("Query String from fetchTumblrResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/tumblr/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from Tumblr: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse
			const articles = parsedResponse.data;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				tumblrData: data
			});
		}

	}

	fetchYouTubeMusicResults = async () =>{
		console.log("Query String from fetchYouTubeMusicResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/youtubemusic/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from YouTube Music: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse
			const articles = parsedResponse.data.items;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				youTubeMusicVideos: data
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
				{ this.state.nytArticles.length === 0 ? null : <NYTNews nytArticles={this.state.nytArticles}/>}
				{ this.state.newsAPIArticles.length === 0 ? null : <NewsAPI newsAPIArticles={this.state.newsAPIArticles}/>}
				{ this.state.techCrunchArticles.length === 0 ? null : <TechCrunch techCrunchArticles={this.state.techCrunchArticles}/>}
				{ this.state.tumblrData.length === 0 ? null : <Tumblr tumblrData={this.state.tumblrData}/>}
				{ this.state.youTubeMusicVideos.length === 0 ? null : <YouTubeMusic youTubeMusicVideos={this.state.youTubeMusicVideos}/>}
			</div>
		);
	}
}

export default ResultContainer;