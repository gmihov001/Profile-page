import React from "react";
import { bool, func } from "prop-types";

export const Modal = ({ show, handleClose }) => {
	const showHideClassname = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassname}>
			<div className="modal-main rounded shadow border border-primary">
                <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
        Modal
      </div>
      <div class="modal-footer">
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
