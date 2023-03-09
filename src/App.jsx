import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>To-Do + React</h1>
			<h2>What's needs to be done?</h2>
			<input type="text" name="text" className="todo-input" />
			<button>Add Task</button>
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
	);
}

export default App;
