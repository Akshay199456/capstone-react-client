import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import YouTube from '../../components/YouTube';
import NYTNews from '../../components/NYTNews';
import NewsAPI from '../../components/NewsAPI';
import TechCrunch from '../../components/TechCrunch';
import Tumblr from '../../components/Tumblr';
import YouTubeMusic from '../../components/YouTubeMusic';
import LastFm from '../../components/LastFm';

class ResultContainer extends Component{
	constructor(){
		super();
		
		this.state ={
			queryString: localStorage.getItem('queryString'),
			youTubeVideos: [],
			youTubeVideosCount: 0,
			nytArticles: [],
			nytArticlesCount: 0,
			newsAPIArticles: [],
			newsAPIArticlesCount: 0,
			techCrunchArticles: [],
			techCrunchArticlesCount: 0,
			tumblrData: [],
			tumblrDataCount: 0,
			youTubeMusicVideos: [],
			youTubeMusicVideosCount: 0,
			lastFmResults: [],
			lastFmResultsCount: 0

		}
	}

	componentDidMount(){
		// this.fetchYouTubeResults();
		// this.fetchNYTNewsResults();
		// this.fetchNewsAPIResults();
		// this.fetchTechCrunchResults();
		this.fetchTumblrResults();
		// this.fetchYouTubeMusicResults();
		// this.fetchLastFmResults();
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
				youTubeVideos: videoIdArray,
				youTubeVideosCount: parsedResponse.data.pageInfo.totalResults
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
				nytArticles: data,
				nytArticlesCount: parsedResponse.data.response.meta.hits
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
				newsAPIArticles: data,
				newsAPIArticlesCount: parsedResponse.data.totalResults
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
				techCrunchArticles: data,
				techCrunchArticlesCount: parsedResponse.data.totalResults
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
			let value;
			if(parsedResponse.blogCount === -1){
				value = parsedResponse.blogInfo.blog.total_posts;
				if(value < 20){
					value = 20;
				}
			}
			else
				value = 20

			this.setState({
				tumblrData: data,
				tumblrDataCount: value
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
				youTubeMusicVideos: data,
				youTubeMusicVideosCount: parsedResponse.data.pageInfo.totalResults
			});
		}

	}



	fetchLastFmResults = async () =>{
		console.log("Query String from fetchLastFmResults: ", this.state.queryString);
		const response = await fetch('http://localhost:9000/api/v1/result/lastfm/' + this.state.queryString,{
			credentials: 'include'
		});

		console.log("Response from Last Fm: ", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response: ', parsedResponse);

			const data = [];

			// All the data associated with the search is stored in parsedResponse.data.results
			const articles = parsedResponse.data.results.trackmatches.track;
			for(let i=0; i<articles.length; i++){
				// console.log("Article Title: ", articles[i].headline.main);
				data.push(articles[i]);
			}

			console.log("Data: ", data);
			this.setState({
				lastFmResults: data,
				lastFmResultsCount: parseInt((parsedResponse.data.results)['opensearch:totalResults'], 10)
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
				{ this.state.lastFmResults.length === 0 ? null : <LastFm lastFmResults={this.state.lastFmResults}/>}
			</div>
		);
	}
}

export default ResultContainer;