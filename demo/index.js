
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';
import FormGroup from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title 
 * @description
 */
class Demo1 extends Component {
	render () {
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
		)
	}
}/**
 * @title 
 * @description 
 */
class Demo2 extends Component {
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

}var DemoArray = [{"example":<Demo1 />,"title":" ","code":"/**\n * @title \n * @description\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-group\">\n\t        \t<FormGroup validationState=\"error\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"warning\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"success\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":""},{"example":<Demo2 />,"title":" ","code":"/**\n * @title \n * @description \n */\nclass Demo2 extends Component {\n    constructor (props) {\n        super(props);\n        this.state = {\n            value: ''\n        }\n    }\n    validateState () {\n\n        if ( this.state.value == \"\" ) {\n            return \"warning\";\n        }\n        if ( /^[0-9]*$/.test(this.state.value) ) {\n            return \"success\";\n        } else {\n            return \"error\"\n        }\n    }\n\n    handerChange (e) {\n        this.setState({value:e.target.value});\n    }\n    render (){\n        return( \n            <div className=\"demo-form-control\">\n                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>\n                    <FormControl ref=\"demo3FormControl\" placeholder=\"只能输入数字\" value={this.state.value} onChange={this.handerChange.bind(this)}/> \n                </FormGroup>\n            </div>\n        )\n    }\n\n}","desc":" "}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
