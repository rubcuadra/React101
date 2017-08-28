import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component{
		// Para acceder a cosas de otros lados, no recomendado
		// static contextTypes = {
		// 	router: React.PropTypes.object
		// }
		// console.log(this.context);

		//Antes de ser rendereado
		componentWillMount(){
			if ( !this.props.authenticated ) 
			{
				this.props.history.push('/');	
			}
		}

		//Cuando le llegan nuevas props
		componentWillUpdate(nextProps){
			if ( !nextProps.authenticated ) 
			{
				this.props.history.push('/');	
			}
		}

		render(){
			return <ComposedComponent {...this.props}  />;
		}
	}

	function mapStateToProps(state){
		return { authenticated: state.authenticated };
	}

	return  connect(mapStateToProps)(Authentication);
}