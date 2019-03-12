import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react';
import Navbar from '../../components/Navbar';

class HomeContainer extends Component{
	constructor(){
		super();

		this.state ={
			queryString: ''
		}
	}

	componentDidMount = async () =>{
		console.log("Component Getting Mounted!");
		await this.getCurrentUserDetails();
	}

	getCurrentUserDetails = async () =>{
		console.log("We are inside getCurrentUserDetails!");
		console.log("Fetch Profile Details!");
		const response = await fetch('http://localhost:9000/api/v1/user/show/'+ JSON.parse(localStorage.getItem('session')).userId, {
			credentials: 'include'
		});

		console.log('Response from getCurrentUserDetails: ', response);

		if(response.ok){
			const parsedResponse = await response.json();
			console.log('Parsed Response from ViewProfileContainer: ', parsedResponse);
			
			localStorage.setItem('currentUserDetails', JSON.stringify(parsedResponse.user));
		}
	}

	handleChange = (e) =>{	
		this.setState({
			[e.target.name]: e.target.value
		});

		console.log("State from handleChange: ", this.state);
	}

	handleSubmit = (e) =>{	
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});

		localStorage.setItem('queryString', this.state.queryString);
		this.props.history.push('/result');

		
		console.log("State from handleSubmit: ", this.state);
	}

	render(){
		return(
			<div>
				<Navbar/>
				<Form onSubmit={this.handleSubmit}>
					<Form.Input type='text' name='queryString' placeholder='What are you searching for?' onChange={this.handleChange}/>
					<Button type='submit' color='blue' fluid> Search </Button>
				</Form>
			</div>
		);
	}
}

export default HomeContainer;