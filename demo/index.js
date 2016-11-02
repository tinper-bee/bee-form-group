import FormGroup from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';


function demo1() {
    return (
        <div className="demo-form-group">
        	<FormGroup>
        		<FormControl />
        	</FormGroup>
        </div>
    );
}

function demo2() {
    return (
        <div className="demo-form-group">
        	<FormGroup validationState="error"> 
				<FormControl type="text" />
			</FormGroup>	
			<FormGroup validationState="warning"> 
				<FormControl type="text" />
			</FormGroup>	
			<FormGroup validationState="success"> 
				<FormControl type="text" />
			</FormGroup>			
        </div>
    );
}



ReactDOM.render(demo1(), document.getElementById('ReactFormGroupDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactFormGroupDemo2'));
