import React from "react";
import "../styles/stickyTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function StickyTask({ title, content }) {
	return (
		<div className="stickyTaskContainer">
			<div className="stickyTaskContentContainer">
				<button className="actionButton">
					<FontAwesomeIcon size="sm" color="#fff" icon={faPencil} />
				</button>
				<textarea rows={2} className="taskTitle" name="title">
					{title}
				</textarea>

				<textarea rows={7} className="taskContent" name="content">
					{content}
				</textarea>
			</div>
		</div>
	);
}
