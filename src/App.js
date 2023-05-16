import "./App.css";

let date = new Date();

let initUser = {
	name: "User",
	date: date.toDateString(),
	time: date.toLocaleTimeString(),
};

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>Home</li>
					<li>Create Login</li>
					<li>Settings</li>
					<li>Contact</li>
				</ul>
			</nav>
      <userInfo />
			<section className="welcomeSection">
				<h1>Hello {initUser.name}, and Welcome to React</h1>
				<p>Todays date is: {initUser.date}</p>
				<p>The time is now: {initUser.time}</p>
			</section>
		</div>
	);
}

function userInfo() {
	return (
		<div>
			<label for="text-form">username</label>
			<form type="text" id="text-form"></form>
		</div>
	);
}


export default App;

