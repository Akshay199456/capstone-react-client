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