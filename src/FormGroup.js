import classNames from 'classnames';
import React from 'react';

const propTypes = {
  validationState: React.PropTypes.oneOf(['success', 'warning', 'error'])
};

class FormGroup extends React.Component {
    constructor(props) {
    	super(props);
    }
    render() {
	    const { validationState, className, children, ...others } = this.props;
	    /**
		 * @title 默认显示类名’‘
		 */
	    let classes = {
	    	'form-group': true
	    };
	    /**
		 * @title badge 默认显示内容1
		 */
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
