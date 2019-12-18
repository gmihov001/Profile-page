import React from "react";
import { bool, func } from "prop-types";

export const Modal = ({ show, handleClose }) => {
	const showHideClassname = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassname}>
			<div className="modal-main rounded shadow border border-primary">
				<div className="modal-content">
					<div className="modal-header"></div>
					<div className="modal-body">Modal</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleClose}>
							Close
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
