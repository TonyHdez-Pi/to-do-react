import "./App.css";
import { StickyTask, AddTask } from "./components";

function App() {
	const handleClickApp = () => {
		alert("Hello papi");
	};
	return (
		<div className="App">
			<StickyTask
				content={
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil consequuntur vero, perferendis impedit quas sed quam totam, libero, quis cum eius earum! Porro aliquid exercitationem, natus eaque dicta expedita saepe.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil consequuntur vero, perferendis impedit quas sed quam totam, libero, quis cum eius earum! Porro aliquid exercitationem, natus eaque dicta expedita saepe."
				}
				title={"Acuerdate de leer el libro X"}
			/>
			{/* <AddTask handleClick={handleClickApp} /> */}
		</div>
	);
}

export default App;
