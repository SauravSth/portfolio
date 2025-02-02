import pdf from '../files/resume.pdf';

export default function Navbar() {
	return (
		<nav>
			<div className="navLeft">
				<div id="myImage">
					<img
						src="/images/myPhoto.png"
						alt="Saurav Shrestha Image"
					/>
				</div>
				<div id="myName">Saurav Shrestha</div>
			</div>
			<div className="navRight">
				<ul>
					<li>
						<a href="#banner">Home</a>
					</li>
					<li>
						<a href="#aboutMe">About Me</a>
					</li>
					<li>
						<a href="#project">Projects</a>
					</li>

					<li>
						<a href="#contactUs">Contact Me</a>
					</li>
					<li>
						<a href={pdf} target="_blank">
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
