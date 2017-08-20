import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyA1xSyuVXxVWtgvG2_gXV2tmL5qHNofYTs";

// Create a new component that should produce some html
class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos:[], 
			selected_video: null 
		};

		this.searchVideo("kanye west") 
	}

	searchVideo( term ) //Query text
	{
		console.log(term);
		YTSearch({key: API_KEY,term: term}, this.onVideoSearchResponse.bind(this) );
	}

	onVideoSearchResponse(videos)
	{
		this.setState({ 
			videos:videos, 
			selected_video:videos[0] 
		});
	}

	onVideoSelect(selected_video)
	{
		this.setState({selected_video});
	}

	render(){
	  const videoSearch = _.debounce( term => { this.searchVideo(term) } , 500);
	  return (
		<div>
			<SearchBar onSearchTermChange={ videoSearch } />
			<VideoDetail  video={ this.state.selected_video }/>
			<VideoList onVideoSelect={ this.onVideoSelect.bind(this) } videos={this.state.videos}/>
		</div>
	  );
	}
}

//add to DOM the App and where are we adding it
ReactDOM.render(<App />, document.querySelector(".container") );