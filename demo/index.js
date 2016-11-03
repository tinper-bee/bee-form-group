import FormGroup from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import ControlLabel from 'bee-control-label';


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

function demo3() {
    return (
        <div className="demo-form-group">
            <FormGroup validationState="error"> 
                <ControlLabel>组合:</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
            </FormGroup>             
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactFormGroupDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactFormGroupDemo2'));
ReactDOM.render(demo3(), document.getElementById('ReactFormGroupDemo3'));
