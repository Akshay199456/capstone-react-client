import React from 'react';

import NYTNews from '../NYTNews';
import NewsAPI from '../NewsAPI';
import TechCrunch from '../TechCrunch';

const NewsComponent = (props) =>{
	return(
			<div> 
				{ props.nytArticlesLength === 0 ? null : <NYTNews nytArticles={props.nytArticles}/>}
				<button onClick={props.travelNYT}> New York Times </button>
				{ props.newsAPIArticlesLength === 0 ? null : <NewsAPI newsAPIArticles={props.newsAPIArticles}/>}
				<button onClick={props.travelNewsAPI}> News API </button>
				{ props.techCrunchArticlesLength === 0 ? null : <TechCrunch techCrunchArticles={props.techCrunchArticles}/>}
				<button onClick={props.travelTechCrunch}> TechCrunch </button>
			</div> 
	);
}

export default NewsComponent;