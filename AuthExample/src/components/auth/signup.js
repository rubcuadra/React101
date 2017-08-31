import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{

	//La informacion pasada ya esta validada
    handleFormSubmit(formProps){
    	//formProps.email , .password
    	this.props.signUpUser( {...formProps, push:this.props.history.push } );
    }

    render() {
      const { handleSubmit, fields: {email,password,passwordConfirm} } = this.props;
    
      return (
	      <form onSubmit={ handleSubmit( this.handleFormSubmit.bind(this) )  }>
	        <fieldset className="form-group">
	          <label>Email:</label>
	          <input { ...email } type="email" className="form-control"/>
	        </fieldset>
	        {email.touched && email.error && <div className="error">{email.error}</div>}

	        <fieldset className="form-group">
	          <label>Password:</label>
	          <input { ...password } type="password" className="form-control"/>
	        </fieldset>
	        {password.touched && password.error && <div className="error">{password.error}</div>}

	        <fieldset className="form-group">
	          <label>Confirm password:</label>
	          <input { ...passwordConfirm } type="password" className="form-control"/>
	        </fieldset>
	        {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}

	        <button action="submit" className="btn btn-primary" >Sign up</button>
	      </form>
      );
    }
}

function validate(formProps){
	const errors = {};

	if (!formProps.email) 
		errors.email = "Please enter an email";
	
	if (!formProps.password) 
		errors.password = "Please enter a password";
	
	if (!formProps.passwordConfirm) 
		errors.passwordConfirm = "Please confirm password";

	if (formProps.password !== formProps.passwordConfirm){
		errors.passwordConfirm = "Passwords must match";
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'signup',
	fields: ['email','password','passwordConfirm']
},null,actions)(Signup);