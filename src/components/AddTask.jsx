import React from "react";
import "../styles/addTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function AddTask({ handleClick }) {
	return (
		<div className="taskContainer">
			<button className="addTaskButton" onClick={handleClick}>
				<FontAwesomeIcon size="4x" icon={faPlus} />
			</button>
		</div>
	);
}
