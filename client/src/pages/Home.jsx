import { useNavigate } from 'react-router-dom';

export default function Contact() {
	return (
		<>
			<div className="banner">
				<h1 className="heading">Hi! I'm Saurav Shrestha</h1>
				<h2 className="subHeading">
					A passionate result-oriented Web Developer skilled in
					crafting scalable and user-centric web solutions that lead
					to success of projects
				</h2>
				<a href="" className="primaryButton">
					Projects
				</a>
				<img
					src="/images/scroll.gif"
					alt="scroll icon"
					className="scrollGif"
				/>
			</div>
			<section className="about">
				<div id="aboutMe" className="container">
					<div className="title">
						<h1>About Me</h1>
						<div className="underline"></div>
						<p>
							Here you can find more info about me and the
							projects I have built up till now
						</p>
					</div>
					<div id="aboutContentContainer">
						<div className="aboutMeContent contentContainer">
							<h3>Here's some stuff about me</h3>
							<p className="aboutMeText">
								Proident sit culpa et aute excepteur dolor sit.
								Mollit anim irure aliquip in deserunt minim
								consequat ullamco consequat in fugiat anim quis
								eiusmod. Ipsum ex minim incididunt sunt enim
								ullamco. Laboris quis do incididunt excepteur
								esse quis dolore ex enim incididunt nulla
								veniam. Id elit incididunt sunt sunt do minim
								velit quis.
							</p>
						</div>
						<div className="skillContent contentContainer">
							<h3>Skills</h3>
							<div className="skillList">
								<div className="skill">HTML</div>
								<div className="skill">CSS</div>
								<div className="skill">JavaScript</div>
								<div className="skill">React</div>
								<div className="skill">Node</div>
								<div className="skill">Express</div>
								<div className="skill">GIT</div>
								<div className="skill">Github</div>
								<div className="skill">Express</div>
								<div className="skill">EJS</div>
								<div className="skill">SQL</div>
								<div className="skill">NoSQL</div>
								<div className="skill">MongoDB</div>
								<div className="skill">PHP</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="project">
				<div id="project" className="container">
					<div className="title">
						<h1>My Projects</h1>
						<div className="underline"></div>
						<p>
							Here are some projects that I have worked on and a
							bit of info about them
						</p>
					</div>
					<div id="aboutContentContainer">
						<div className="contentContainer">
							<img src="/images/mern.jpg" alt="project 1 image" />
						</div>
						<div className="contentContainer">
							<h3>PerCent App</h3>
							<p>Capstone Project Description</p>
							<a href="" className="primaryButton small">
								Checkout Github
							</a>
						</div>
					</div>
					<div className="underline long"></div>
					<div id="aboutContentContainer">
						<div className="contentContainer">
							<img src="/images/mern.jpg" alt="project 2 image" />
						</div>
						<div className="contentContainer">
							<h3>License Appointment Booking App</h3>
							<p>Description</p>
							<a href="" className="primaryButton small">
								Checkout Github
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="contact">
				<div id="contactUs" className="container">
					<div className="title">
						<h1>Contact Me</h1>
						<div className="underline"></div>
						<p>
							If you want to contact me for any reason, fill out
							the form. I'll get back to you when I can
						</p>
					</div>
					<div className="contactForm">
						<form action="">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Your Name Here..."
							/>
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="Your Email Here..."
							/>
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols={100}
								rows={10}
								placeholder="Your Message Here..."
							></textarea>
							<button
								type="submit"
								className="primaryButton small"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
