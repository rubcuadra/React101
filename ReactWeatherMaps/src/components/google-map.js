import React, {Component} from 'react';

export default class GoogleMap extends Component{
	shouldComponentUpdate(){
		return false; //Jamas cambiara este
	}

	// Si estan intentando re renderearlo con nuevas lat lng
	componentWillReceiveProps(nextProps){
		this.map.panTo(
			{
				lat:nextProps.lat, 
				lng:nextProps.lon
			});
	}

	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
		  }});
	}

	render(){
		return <div ref="map"/>
	}
}