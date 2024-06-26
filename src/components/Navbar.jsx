import { Link } from 'react-router-dom';

import pdf from '../files/Resume.pdf';

export default function Navbar() {
	return (
		<nav>
			<div className="navLeft">Saurav Shrestha</div>
			<div className="navRight">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/contact">Contact Me</Link>
					</li>
					<li>
						<Link to={pdf} target="_blank">
							My Resume
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
