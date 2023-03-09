import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="tittleContainer">
				<h1>
					<span className="todoSpan">To-Do + </span>
					<a href="https://reactjs.org/" className="reactSpan">
						React
					</a>
				</h1>
				<h2>What's needs to be done?</h2>
			</div>
			<div className="todoInputContainer">
				<input
					type="text"
					name="text"
					placeholder="Create a new task"
					className="todoInput"
				/>
				<button className="addTask">Add Task</button>
			</div>
			{/* Here is where the todos will be displayed */}
			<div className="todosContainer">
				<h2>Tasks ramaining: 1</h2>
				<ul>
					<li>
						<input type="checkbox" name="checkedTask" id="1" />
						<p>Task to complete</p>
						<button>Edit</button>
						<button>Delete</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
