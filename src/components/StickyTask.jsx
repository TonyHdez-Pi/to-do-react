import React from "react";
import "../styles/stickyTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function StickyTask({ title, content }) {
	return (
		<div className="stickyTaskContainer">
			<div className="stickyTaskContentContainer">
				<button className="actionButton">
					<FontAwesomeIcon size="sm" color="#fff" icon={faPencil} />
				</button>
				<h2 className="taskTitle">{title}</h2>
				<p className="taskContent">{content}</p>
			</div>
		</div>
	);
}
