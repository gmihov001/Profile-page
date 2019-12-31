import React from "react";
import { bool, func } from "prop-types";

export const Modal = ({ show, handleClose }) => {
	const showHideClassname = show ? "modal display-block" : "modal display-none";
	console.log(show);
	console.log(showHideClassname);
	console.log("Modal is open");

	return (
		<div className={showHideClassname}>
			<div className="modal-main rounded shadow border border-primary">
				<div className="modal-content">
					<div className="modal-header h4">Please reach me at:</div>
					<div className="modal-body h5 text-center">gmihov001@gmail.com</div>
					<div className="modal-footer d-flex justify-content-center">
						<button type="button" className="btn btn-primary px-4 py-2 h4" onClick={handleClose}>
							CLOSE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	show: bool,
	handleClose: func
};
