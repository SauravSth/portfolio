import { Link } from 'react-router-dom';

import pdf from '../files/resume.pdf';

export default function Navbar() {
	return (
		<nav>
			<div className="navLeft">
				<div id="myImage">
					<img
						src="../../public/images/MyPhoto.png"
						alt="Saurav Shrestha Image"
					/>
				</div>
				<div id="myName">Saurav Shrestha</div>
			</div>
			<div className="navRight">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">About Me</Link>
					</li>
					<li>
						<Link to="/">Projects</Link>
					</li>

					<li>
						<Link to="/">Contact Me</Link>
					</li>
					<li>
						<Link to={pdf} target="_blank">
							Resume
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
