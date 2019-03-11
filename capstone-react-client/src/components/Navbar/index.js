import React from 'react';
import {withRouter} from 'react-router-dom';

const Navbar = (props) =>{


	// function to logout the user 
	const logout = async () => {
	// console.log('Click');
	  try{
	      //Make request to server in backend to delete the user cookie
	       const response = await fetch("http://localhost:9000/api/v1/auth/logout", {
	        credentials: 'include'
	      });

	       if (!response.ok){
	          throw Error(response.error);
	        }

	        else{
	        	const responseParsed = await response.json(); 
	            console.log("logout parsed response: ", responseParsed);


	            // Delete front end cookies
	            localStorage.removeItem('session');
	            localStorage.removeItem('queryString');

	            // Deleting data for entertainment category
				localStorage.removeItem('youTubeVideos');
				localStorage.removeItem('youTubeVideosCount');
				localStorage.removeItem('tumblrData')
				localStorage.removeItem('tumblrDataCount');

				// Delete data for news category
				localStorage.removeItem('nytArticles');
				localStorage.removeItem('nytArticlesCount');
				localStorage.removeItem('newsAPIArticles');
				localStorage.removeItem('newsAPIArticlesCount');
				localStorage.removeItem('techCrunchArticles');
				localStorage.removeItem('techCrunchArticlesCount');

				// Delete data for music category
				localStorage.removeItem('youTubeMusicVideos');
				localStorage.removeItem('youTubeMusicVideosCount');
				localStorage.removeItem('lastFmResults');
				localStorage.removeItem('lastFmResultsCount');


	            // Redirect to sign in page
	            props.history.push('/');
	        }
	}

	  catch(err){
	    console.log(err);
	}
}
	// console.log('NAV PROPS', props)

	const home = () =>{
		props.history.push('/home');
	}

	return(

		<header>
			<div onClick={home}>
				Home
			</div>

			<div onClick={logout}>
				 Logout 
			</div>				
		</header>
	);
}

// need to wrap navbar with withRouter to make it get the child properties from BrowserRouter. By default 
// BrowserRouter will only apply its child properties to its children which have been 
// specified in App.js since <App> is enclosed within <BrowserRouter> in index.js
export default withRouter(Navbar);