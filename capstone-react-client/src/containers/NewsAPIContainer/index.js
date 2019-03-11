import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import TrendingNewsAPI from '../../components/TrendingNewsAPI';
import NewsAPI from '../../components/NewsAPI';

class NewsAPIContainer extends Component{
	constructor(){
		super();

		this.state ={
			queryString: localStorage.getItem('queryString'),


			newsAPIArticles: JSON.parse(localStorage.getItem('newsAPIArticles')),
			topHeadlines: []
		}
	}

	componentDidMount(){
		this.fetchTopHeadlines();
	}

	fetchTopHeadlines = async () =>{
		const response = await fetch('http://localhost:9000/api/v1/result/trending/newsapi', {
			credentials: 'include'
		});
		console.log("Response from News API Container", response);
		if(response.ok){
			const parsedResponse = await response.json();
			console.log("Parsed Response from News API Container", parsedResponse);

			const articles = [];
			const data = parsedResponse.data.articles;

			for(let i=0; i<data.length; i++){
				articles.push(data[i]);
			}

			this.setState({
				topHeadlines: articles
			});
		}
	}

	render(){
		console.log("State from NewsAPIContainer: ", this.state);
		return(
			<div>
				<Navbar/>
				Welcome to the News API Container
				{ this.state.newsAPIArticles.length === 0 ? null : <NewsAPI newsAPIArticles={this.state.newsAPIArticles}/>}
				{ this.state.topHeadlines.length === 0 ? null : <TrendingNewsAPI topHeadlines={this.state.topHeadlines}/>}
			</div>
		);
	}
}

export default NewsAPIContainer;