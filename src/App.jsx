import "./App.css";
import { StickyTask, AddTask } from "./components";

function App() {
	const handleClickApp = () => {
		alert("Hello papi");
	};
	return (
		<div className="App">
			<div className="taskContainer">
				<StickyTask
					content={"-Hacer que el boton de agregar nota funcione."}
					title={"Titulo alv"}
				/>
				<AddTask handleClick={handleClickApp} />
			</div>
		</div>
	);
}

export default App;
