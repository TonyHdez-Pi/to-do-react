import "./App.css";
import StickyTask from "./components/StickyTask";

function App() {
	return (
		<div className="App">
			<div className="tittleContainer">
				<h1>
					<span className="todoSpan">Sticky To Do - </span>
					<a href="https://reactjs.org/" className="reactSpan">
						React
					</a>
				</h1>
				<h2>What's needs to be done?</h2>
				<StickyTask />
			</div>
		</div>
	);
}

export default App;
