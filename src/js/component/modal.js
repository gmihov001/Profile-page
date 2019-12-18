import React from "react";
import { bool, func } from "prop-types";

export const Modal = ({ handleClose, show }) => {
	const showHideClassname = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassname}>
			<section className="modal-main">
				<p>Modal</p>
				<button onClick={handleClose}>Close</button>
			</section>
		</div>
	);
};

Modal.propTypes = {
	show: bool,
	handleClose: func
};
