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

class Demo3 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }

    }

    validateState () {

        if ( this.state.value == "" ) {
            return "warning";
        }
        if ( /^[0-9]*$/.test(this.state.value) ) {
            return "success";
        } else {
            return "error"
        }
    }

    handerChange (e) {
        this.setState({value:e.target.value});
    }
    render (){
        return( 
            <div className="demo-form-control">
                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>
                    <FormControl ref="demo3FormControl" placeholder="只能输入数字" value={this.state.value} onChange={this.handerChange.bind(this)}/> 
                </FormGroup>
            </div>
        )
    }

}

function demo4() {
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
ReactDOM.render(<Demo3 />, document.getElementById('ReactFormGroupDemo3'));
ReactDOM.render(demo4(), document.getElementById('ReactFormGroupDemo4'));
