import React from "react";
import { bool, func } from "prop-types";

export const ProjectModal = ({ show, handleClose }) => {
	const showHideClassname = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassname}>
			<div className="modal-main rounded shadow">
				<div className="modal-content">
					<div className="modal-header h4">This is a project modal:</div>
					<div className="modal-body py-5 h5 text-center">Description</div>
					<div className="modal-footer d-flex justify-content-center">
						<button type="button" className="glow-on-hover px-4 py-2 h4" onClick={handleClose}>
							CLOSE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ProjectModal.propTypes = {
	show: bool,
	handleClose: func
};
