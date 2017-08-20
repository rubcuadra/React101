import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		if (!this.props.book) 
		{
		  return <div>Select a Book</div>
		}
		return <div> {this.props.book.title} <br/> {this.props.book.pages} </div>
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);