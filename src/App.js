import logo from "./images/logo.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
	const [emailError, setEmailError] = useState("");

	const validateEmail = (e) => {
		let email = e.target.value;

		if (validator.isEmail(email)) {
			setEmailError("");
		} else {
			setEmailError("Please provide a vaild email");
		}
	};

	return (
		<div className="App">
			<div className="info-and-photo">
				<div className="description">
					<div className="header">
						<img src={logo} className="App-logo" alt="logo" />
						<a className="App-link" href="http://www.w3.org/2000/svg"></a>
					</div>
					<div className="mobile-image-container">
						<img
							src={require("./images/hero-mobile.jpg")}
							alt=""
							className="mobile-image"
						/>
					</div>
					<div className="title">
						<h1 className="title-pt1">WE'RE</h1>
						<h1 className="title-pt2">COMING SOON</h1>
					</div>
					<p className="paragraph">
						Hello fellow shoppers! We're currently building our new fashion store. Add
						your email below to stay up-to-date with announcements and our launch
						deals.
					</p>
					<div
						className={
							emailError === "Please provide a vaild email"
								? "input-container-error"
								: "input-container"
						}
					>
						<input
							type="text"
							className="email-input"
							placeholder="Email Address"
							onChange={(e) => validateEmail(e)}
						/>
						{emailError === "Please provide a vaild email" ? (
							<IoMdAlert className="alertIcon" />
						) : null}
						<button className="email-btn">
							<MdOutlineArrowForwardIos />
						</button>
					</div>
					<div className="errorMessage">{emailError}</div>
				</div>
				<div className="images-container">
					<div className="desktop-image-container">
						<img
							className="desktop-image"
							src={require("./images/hero-desktop.jpg")}
							alt="desktop-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
