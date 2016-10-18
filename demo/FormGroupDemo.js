import { FormGroup } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { FormControl } from 'bee-form-control';

class Demo extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return( 
			<div>
				<FormGroup controlId="FormGroup-Test"> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup controlId="FormGroup-error" validationState="error"> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup controlId="FormGroup-warn" validationState="warning"> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup controlId="FormGroup-success" validationState="success"> 
					<FormControl type="text" />
				</FormGroup>
			</div>
		)
	}
}
export default Demo;