import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';

const ProfileView = (props) =>{

	const currentUser = JSON.parse(localStorage.getItem('session'));
	const currentUserId = currentUser.userId;
	console.log("Current User Id: ", currentUserId);
	
	const viewProfileId = localStorage.getItem('viewProfile');
	console.log('View Profile Id: ', viewProfileId);

	const currentUserDetails = JSON.parse(localStorage.getItem('currentUserDetails'));
	console.log('Current User Details: ', currentUserDetails);

	const searchUsers = () =>{
		console.log("Props: ", props);
		props.history.push('/find');
	}

	const editProfile = () =>{
		props.history.push('/editProfile');
	}

	const deleteProfile = async () =>{
		console.log("Delete profile clicked!");
		console.log("User to be deleted: ", currentUser);
		const response = await fetch('http://localhost:9000/api/v1/user/'+ currentUserId, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include'
		});
		console.log('Response from deleteProfile: ', response);

		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response from deleteProfile: ', parsedResponse);

			// Delete front end cookies
		    localStorage.removeItem('session');
		    localStorage.removeItem('queryString');
		    localStorage.removeItem('viewProfile');
		    localStorage.removeItem('currentUserDetails');
		    localStorage.removeItem('navbar');

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

			props.history.push('/');
		}
	}


	return(
		<div>
		{
			(props.user.length !== 0 && currentUserId!==viewProfileId ) ?
			<div>
				<Segment raised>
					<div> Username: {props.user.username} </div>
					<div> Email: {props.user.email} </div>
					<div> User ID: {props.user._id} </div>
				</Segment>
			</div> : 

			<div>
				<Segment raised>
					<div> LoggedIn Status: True</div>
					<div> Username: {currentUserDetails.username} </div>
					<div> Email: {currentUserDetails.email} </div>
					<div> User ID: {currentUserDetails._id} </div>
				</Segment>
			</div>


		}	

			<Button onClick={searchUsers}> Search Users </Button>
			{ currentUserId === viewProfileId ? <Button onClick={editProfile}> Edit Profile </Button> : null}
			{ currentUserId === viewProfileId ? <Button onClick={deleteProfile}> Delete Profile </Button> : null}
		</div>
	);
}

export default withRouter(ProfileView);