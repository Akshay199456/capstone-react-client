import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContainer from '../../containers/AuthContainer';
import HomeContainer from '../../containers/HomeContainer';
import My404 from '../404';


const AllRoutes = () => {
	return (
		<Switch>
      		<Route exact path = '/' component= {AuthContainer} />
      		<Route exact path = '/home' component = {HomeContainer}/>
      		<Route component={My404} />
      	</Switch>
		)
}

export default AllRoutes;