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
}