import links from '../files/links.json';

export default function Home() {
	return (
		<>
			<div id="banner" className="banner">
				<h1 className="heading">Hi! I'm Saurav Shrestha</h1>
				<h2 className="subHeading">
					A passionate result-oriented Web Developer skilled in
					crafting scalable and user-centric web solutions that lead
					to success of projects
				</h2>
				<a href="#project" className="primaryButton">
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
								I'm a <strong>backend</strong> focused web
								developer building the Backend of websites to
								create a successful product. I graduated from{' '}
								<strong>Conestoga College</strong> taking{' '}
								<strong>Web Development</strong> in 2024 where I
								created projects which you can find in the{' '}
								<a href="#project" className="link">
									Projects
								</a>{' '}
								section.
							</p>
							<p className="aboutMeText">
								I have programming since grade 8 where I started
								with <strong>HTML</strong> and have only learnt
								more since. I have the most experience in{' '}
								<strong>JavaScript</strong> but eagerly develop
								new skills daily. Feel free to connect with me
								on my{' '}
								<a
									href={links.linkedIn}
									className="link"
									target="_blank"
								>
									LinkedIn
								</a>
								.
							</p>
							<p className="aboutMeText">
								I'm open to <strong>job</strong> opportunities
								where I can contribute, learn and grow. If I
								seem like I have fitting experience and am a
								good fit then don't hesitate to{' '}
								<a href="#contactUs" className="link">
									contact me
								</a>
								.
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
							<img
								src="/images/randomscreen.png"
								alt="PerCent App Screen Image"
							/>
						</div>
						<div className="contentContainer">
							<h3>PerCent</h3>
							<div className="underline left"></div>
							<p className="aboutMeText">
								PerCent is a finance tracker app which me and my
								group made for our Capstone project. It has
								functionality for both individual and group use.
								It includes functionality for tracking
								individual finances, setting up groups, and
								managing shared expenses.
							</p>
							<a
								href="https://github.com/SauravSth/CapstoneProjectConestoga"
								className="primaryButton small"
								target="_blank"
							>
								Checkout Github
							</a>
						</div>
					</div>
					<div className="underline long"></div>
					<div id="aboutContentContainer">
						<div className="contentContainer">
							<img
								src="/images/randomscreen.png"
								alt="License Appointment App Image"
							/>
						</div>
						<div className="contentContainer">
							<h3>License Appointment App</h3>
							<div className="underline left"></div>
							<p className="aboutMeText">
								This app allows users to register for different
								levels of the license exam. The user can
								register for the G1 initially and G2 after.
								Different user types have been setup to handle
								test decisions and appointment management has
								been setup for admin.
							</p>
							<a
								href="https://github.com/SauravSth/LicenseApp"
								className="primaryButton small"
								target="_blank"
							>
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
								cols={10}
								rows={8}
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
