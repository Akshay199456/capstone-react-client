import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContainer from '../../containers/AuthContainer';
import HomeContainer from '../../containers/HomeContainer';
import ResultContainer from '../../containers/ResultContainer';

// import EntertainmentContainer from '../../containers/EntertainmentContainer';
import NewsContainer from '../../containers/NewsContainer';
import MusicContainer from '../../containers/MusicContainer';
/*
<Route exact path = '/entertainment' component = {EntertainmentContainer}/>
*/
import My404 from '../404';


const AllRoutes = () => {
	return (
		<Switch>
      		<Route exact path = '/' component= {AuthContainer} />
      		<Route exact path = '/home' component = {HomeContainer}/>
      		<Route exact path = '/result' component = {ResultContainer}/>
      		<Route exact path = '/news' component = {NewsContainer}/>
      		<Route exact path = '/music' component = {MusicContainer}/>

      		<Route component={My404} />
      	</Switch>
		)
}

export default AllRoutes;