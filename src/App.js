import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1 className="title">Smart Street Lighting System</h1>
				<div className="frameContainer">
					<iframe
						className="frames"
						src="https://thingspeak.com/channels/1914520/charts/1?width=auto&height=auto&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						className="frames"
						src="https://thingspeak.com/channels/1914520/charts/2?width=auto&height=autobgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						className="frames"
						src="https://thingspeak.com/channels/1914520/charts/3?width=auto&height=autobgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						className="frames"
						src="https://thingspeak.com/channels/1914520/charts/5?width=auto&height=autobgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						className="frames"
						src="https://thingspeak.com/channels/1914520/charts/6?width=auto&height=autobgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default App;
