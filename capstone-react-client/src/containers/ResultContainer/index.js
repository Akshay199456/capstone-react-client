import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import YouTube from '../../components/YouTube';
import NYTNews from '../../components/NYTNews';
import NewsAPI from '../../components/NewsAPI';
import TechCrunch from '../../components/TechCrunch';
import Tumblr from '../../components/Tumblr';
import YouTubeMusic from '../../components/YouTubeMusic';
import LastFm from '../../components/LastFm';

import {RadialChart} from 'react-vis';


class ResultContainer extends Component{
	constructor(){
		super();
		
		this.state ={
			// Data from different platforms
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
			lastFmResultsCount: 0,

			// Data to display radial chart
			dataReadyToDisplay: false,
			entertainmentCount: 0,
			musicCount: 0,
			newsCount: 0,
			entertainmentPercentage: 0,
			musicPercentage: 0,
			newsPercentage: 0 

		}
	}

	componentDidMount = async () => {
		await this.fetchYouTubeResults();
		await this.fetchNYTNewsResults();
		await this.fetchNewsAPIResults();
		await this.fetchTechCrunchResults();
		await this.fetchTumblrResults();
		await this.fetchYouTubeMusicResults();
		await this.fetchLastFmResults();

		await this.generateStatsOverall();
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


	generateStatsOverall = () =>{
		console.log("We have triggered generateStatsOverall");

		const entertainmentCount = this.state.youTubeVideosCount + this.state.tumblrDataCount;
		const musicCount = this.state.youTubeMusicVideosCount + this.state.lastFmResultsCount;
		const newsCount = this.state.nytArticlesCount + this.state.newsAPIArticlesCount + this.state.techCrunchArticlesCount;

		console.log("Entertainment Category Count: ", entertainmentCount);
		console.log("Music Category Count: ", musicCount);
		console.log("News Category Count: ", newsCount);

		this.setState({
			entertainmentCount: entertainmentCount,
			musicCount: musicCount,
			newsCount: newsCount
		});

		this.generateDegreeEquivalent(entertainmentCount, musicCount, newsCount);
	}

	generateDegreeEquivalent = (category1Data, category2Data, category3Data) =>{
		const total = category1Data + category2Data + category3Data;
		const degree1 = Math.round((category1Data/total)*360);
		const degree2 = Math.round((category2Data/total)*360);
		const degree3 = Math.round((category3Data/total)*360);

		console.log("Entertainment Category Percentage: ", degree1);
		console.log("Music Category Percentage: ", degree2);
		console.log("News Category Percentage: ", degree3);

		this.setState({
			entertainmentPercentage: degree1,
			musicPercentage: degree2,
			newsPercentage: degree3,
			dataReadyToDisplay: true
		});
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

				{ this.state.dataReadyToDisplay ?
					<RadialChart
						data={[{angle: this.state.entertainmentPercentage, color: 0.3, label: 'Entertainment', sublabel:'Percentage:'+this.state.entertainmentPercentage}, {angle: this.state.musicPercentage, color: 1.6, label: 'Music'}, {angle: this.state.newsPercentage, color: 1.9, label: 'News'}]}
						width={300}
						height={300} 
						showLabels={true}
					/>
					 : null
				}
			</div>
		);
	}
}

export default ResultContainer;