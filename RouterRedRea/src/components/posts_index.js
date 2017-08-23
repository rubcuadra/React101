import _ from 'lodash';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map( this.props.posts, post=>{
			
			return (<li className="list-group-item" key={post.id}> 
				<Link to={`/posts/${post.id}`}>{post.title}</Link>
			</li>);
		});
	}

	render(){
		const transitionOptions = {
			transitionName: 'fade' , //Este sera el nombre de la css class
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500
		};

		return (
			<div>
			  <div className="text-xs-right">
			  	<Link className="btn btn-primary" to="/posts/new">
			  		Add a Post
			  	</Link>
			  </div>
			  <h3>Posts</h3>
			  <ul className="list-group">
			  	<ReactCSSTransitionGroup {...transitionOptions}>	
			  	  {this.renderPosts()}
			  	</ReactCSSTransitionGroup>
			  </ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {posts:state.posts};

}

export default connect(mapStateToProps, {fetchPosts} )(PostsIndex);


// Gabriela Parada

// Postular para un intercambio.

// Direccion de escolares,
// direccion academica


