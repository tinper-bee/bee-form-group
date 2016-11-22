import classnames from 'classnames';
import React, { PropTypes} from 'react';

const propTypes = {
  validationState: PropTypes.oneOf(['success', 'warning', 'error'])
};
const defaultProps = {
	clsPrefix: 'u-form-group'
}

class FormGroup extends React.Component {
    constructor(props) {
    	super(props);
    }
    render() {
	    const { validationState, className, children,clsPrefix, ...others } = this.props;

	    let classes = {};

	    if(validationState){
	    	classes[`has-${validationState}`] = true;
	    }

	    let classNames = classnames(clsPrefix,classes);

	    return (
	      <div
	        {...others}
	        className={classnames(className,classNames)}
	      >
	      	{children}
	      </div>
	    );
    }
}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup
