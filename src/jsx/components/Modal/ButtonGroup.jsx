import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const ButtonGroup = props => {
	return (
		<div className={"button-group"}>
			<div className={classNames({ "button-selected": props.collected === "first" })} onClick={props.clickFirst}>
				{props.first}
			</div>
			<div className={classNames({ "button-selected": props.collected === "last" })} onClick={props.clickLast}>
				{props.last}
			</div>
		</div>
	);
};

export default ButtonGroup;

ButtonGroup.propTypes = {
	first: PropTypes.string,
	last: PropTypes.string,
	collected: PropTypes.string,
	clickFirst: PropTypes.func,
	clickLast: PropTypes.func
};

ButtonGroup.defaultProps = {
	clickFirst: () => {},
	clickLast: () => {},
	first: "first button",
	last: "last button"
};
