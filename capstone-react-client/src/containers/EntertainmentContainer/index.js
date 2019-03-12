import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import EntertainmentComponent from '../../components/EntertainmentComponent';
import DisplayPieChart from '../../components/DisplayPieChart';

class EntertainmentContainer extends Component{
	constructor(){
		super();

		this.state = {
			youTubeVideos: JSON.parse(localStorage.getItem('youTubeVideos')),
			youTubeVideosCount: JSON.parse(localStorage.getItem('youTubeVideosCount')),
			youTubeVideosPercentage: 0,
			tumblrData: JSON.parse(localStorage.getItem('tumblrData')),
			tumblrDataCount: JSON.parse(localStorage.getItem('tumblrDataCount')),
			tumblrDataPercentage: 0,

			dataReadyToDisplay: false
		}
	}

	componentDidMount = async () => {
		await this.generateStatsEntertainment();
	}


	generateDegreeEquivalent = (category1Data, category2Data, category3Data) =>{
		const total = category1Data + category2Data + category3Data;
		const degree1 = Math.round((category1Data/total)*360);
		const degree2 = Math.round((category2Data/total)*360);
		const degree3 = Math.round((category3Data/total)*360);

		console.log("YouTube Percentage: ", degree1);
		console.log("Tumblr Percentage: ", degree2);
		
		this.setState({
			youTubeVideosPercentage: degree1,
			tumblrDataPercentage: degree2
		});
	}

	generateStatsEntertainment = () =>{
		console.log("We have triggered generateStatsEntertainment");

		this.generateDegreeEquivalent(this.state.youTubeVideosCount, this.state.tumblrDataCount, 0);
		console.log("State from generateStatsNews: ", this.state);
	}

	setDataReady = () =>{
		const value = this.state.dataReadyToDisplay;
		this.setState({
			dataReadyToDisplay: !value
		});
	}

	travelYouTube = () =>{
		this.props.history.push('/entertainment/youtube');
	}

	render(){
		console.log("State from Entertainment Container: ", this.state);
		return(
			<div>
				<Navbar/>
				Entertainment Container
				<EntertainmentComponent 
					youTubeVideos={this.state.youTubeVideos} youTubeVideosLength = {this.state.youTubeVideos.length} travelYouTube={this.travelYouTube}
					tumblrData={this.state.tumblrData} tumblrDataLength = {this.state.tumblrData.length}
				/>

				<DisplayPieChart 
					angle1 = {this.state.youTubeVideosPercentage} label1={'YouTube'}
					angle2 = {this.state.tumblrDataPercentage} label2={'Tumblr'}
					angle3 = {0} label3={''}
					setDataReady = {this.setDataReady}
					dataReadyToDisplay = {this.state.dataReadyToDisplay}
				/>
			</div>
		);
	}
}

export default EntertainmentContainer;