import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

const DisplayUsers = (props) =>{

	const users = props.users.map((item, index) =>{
		return(
			<Segment raised key={index}>
				<div> Email: {item.email}</div>
				<div> Username: {item.username}</div>
				<div> User id: {item._id}</div>
				<Button onClick={props.viewProfile.bind(null, item._id)}> View Profile </Button>
			</Segment>
		);
	});

	return(
			<div> 
				<h1> Matching Users </h1>
				{users}
			</div> 
	);
}

export default DisplayUsers;