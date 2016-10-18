import classNames from 'classnames';
import React from 'react';

const propTypes = {
  controlId: React.PropTypes.string,
  validationState: React.PropTypes.oneOf(['success', 'warning', 'error']),
};

class FormGroup extends React.Component {
    constructor(props) {
    	super(props);
    }
    render() {
	    const { validationState, className, children, ...others } = this.props;
	    let classes = {};
	    if(validationState){
	    	classes[`has-${validationState}`] = true;
	    }
	    return (
	      <div
	        {...others}
	        className={classNames(className,classes)}
	      >
	        {children}
	      </div>
	    );
    }
}

FormGroup.propTypes = propTypes;

export default FormGroup
