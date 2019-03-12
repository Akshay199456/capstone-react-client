import React from 'react';
import { Route, Switch } from 'react-router-dom';


// Base Containers
import AuthContainer from '../../containers/AuthContainer';
import HomeContainer from '../../containers/HomeContainer';
import ResultContainer from '../../containers/ResultContainer';

// Categories Container
import EntertainmentContainer from '../../containers/EntertainmentContainer';
import NewsContainer from '../../containers/NewsContainer';
import MusicContainer from '../../containers/MusicContainer';


// Platform Container

// A. News Containers
import NYTContainer from '../../containers/NYTContainer';
import NewsAPIContainer from '../../containers/NewsAPIContainer';
import TechCrunchContainer from '../../containers/TechCrunchContainer';

// B. Music Containers
import LastFmContainer from '../../containers/LastFmContainer';
// import YouTubeMusicContainer from '../../containers/YouTubeMusicContainer';

// <Route exact path = '/music/youtubemusic' component = {YouTubeMusicContainer}/>


import My404 from '../404';

const AllRoutes = () => {
	return (
		<Switch>

      		<Route exact path = '/' component= {AuthContainer} />
      		<Route exact path = '/home' component = {HomeContainer}/>
      		<Route exact path = '/result' component = {ResultContainer}/>
      		

                  <Route exact path = '/news' component = {NewsContainer}/>
      		<Route exact path = '/music' component = {MusicContainer}/>
                  <Route exact path = '/entertainment' component = {EntertainmentContainer}/>

                  <Route exact path = '/news/newsapi' component = {NewsAPIContainer}/>
                  <Route exact path = '/news/techcrunch' component = {TechCrunchContainer}/>
                  <Route exact path = '/news/nyt' component = {NYTContainer}/>

                  <Route exact path = '/music/lastfm' component = {LastFmContainer}/>

      		<Route component={My404} />
      	</Switch>
		)
}

export default AllRoutes;