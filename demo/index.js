
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';
import FormGroup from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":"  FromGroup 三种校验状态实例","code":"/**\n * @title  FromGroup 三种校验状态实例\n * @description `validationState`参数控制状态颜色\n */\n\nimport { Component } from 'react';\nimport FormControl from 'bee-form-control';\nimport FormGroup from 'bee-form-group';\n\n class Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-group\">\n\t        \t<FormGroup validationState=\"error\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"warning\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"success\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\t\t\n\t        </div>\n\t\t)\n\t}\n}\n\n","desc":" `validationState`参数控制状态颜色"},{"example":<Demo2 />,"title":" FormGroup 动态校验实例","code":"/**\n * @title FormGroup 动态校验实例\n * @description 限制只能输入数字\n */\nimport React, { Component } from 'react';\nimport FormControl from 'bee-form-control';\nimport FormGroup from 'bee-form-group';\n\nclass Demo2 extends Component {\n    constructor (props) {\n        super(props);\n        this.state = {\n            value: ''\n        }\n    }\n    validateState () {\n\n        if ( this.state.value == \"\" ) {\n            return \"warning\";\n        }\n        if ( /^[0-9]*$/.test(this.state.value) ) {\n            return \"success\";\n        } else {\n            return \"error\"\n        }\n    }\n\n    handerChange (e) {\n        this.setState({value:e});\n    }\n    render (){\n        return( \n            <div className=\"demo-form-control\">\n                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>\n                    <FormControl ref=\"demo3FormControl\" placeholder=\"只能输入数字\" value={this.state.value} onChange={this.handerChange.bind(this)}/> \n                </FormGroup>\n            </div>\n        )\n    }\n\n}\n\n","desc":" 限制只能输入数字"}]


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
