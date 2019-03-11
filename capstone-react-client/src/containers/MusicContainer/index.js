import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import MusicComponent from '../../components/MusicComponent';
import DisplayPieChart from '../../components/DisplayPieChart';

class MusicContainer extends Component{
	constructor(){
		super();

		this.state = {
			youTubeMusicVideos: JSON.parse(localStorage.getItem('youTubeMusicVideos')),
			youTubeMusicVideosCount: JSON.parse(localStorage.getItem('youTubeMusicVideosCount')),
			youTubeMusicVideosPercentage: 0,
			lastFmResults: JSON.parse(localStorage.getItem('lastFmResults')),
			lastFmResultsCount: JSON.parse(localStorage.getItem('lastFmResultsCount')),
			lastFmResultsPercentage: 0,

			dataReadyToDisplay: false
		}
	}

	componentDidMount = async () => {
		await this.generateStatsMusic();
	}


	generateDegreeEquivalent = (category1Data, category2Data, category3Data) =>{
		const total = category1Data + category2Data + category3Data;
		const degree1 = Math.round((category1Data/total)*360);
		const degree2 = Math.round((category2Data/total)*360);
		const degree3 = Math.round((category3Data/total)*360);

		console.log("YouTube Music Percentage: ", degree1);
		console.log("Last Fm Percentage: ", degree2);
		
		this.setState({
			youTubeMusicVideosPercentage: degree1,
			lastFmResultsPercentage: degree2
		});
	}

	generateStatsMusic = () =>{
		console.log("We have triggered generateStatsMusic");

		this.generateDegreeEquivalent(this.state.youTubeMusicVideosCount, this.state.lastFmResultsCount, 0);
		console.log("State from generateStatsNews: ", this.state);
	}

	setDataReady = () =>{
		const value = this.state.dataReadyToDisplay;
		this.setState({
			dataReadyToDisplay: !value
		});
	}

	render(){
		console.log("State from MusicContainer: ", this.state);
		return(
			<div>
				<Navbar/>
				Music Container
				<MusicComponent 
					youTubeMusicVideos={this.state.youTubeMusicVideos} youTubeMusicVideosLength = {this.state.youTubeMusicVideos.length}
					lastFmResults={this.state.lastFmResults} lastFmResultsLength = {this.state.lastFmResults.length}
				/>

				<DisplayPieChart 
					angle1 = {this.state.youTubeMusicVideosPercentage} label1={'YouTube Music'}
					angle2 = {this.state.lastFmResultsPercentage} label2={'Last Fm'}
					angle3 = {0} label3={'Null'}
					setDataReady = {this.setDataReady}
					dataReadyToDisplay = {this.state.dataReadyToDisplay}
				/>
			</div>
		);
	}
}

export default MusicContainer;