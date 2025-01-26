import { Link } from 'react-router-dom';

import pdf from '../files/Resume.pdf';

export default function Navbar() {
	return (
		<nav>
			<div className="navLeft"></div>
			<div className="navRight">
				<ul>
					<li>
						<Link to="/portfolio">Home</Link>
					</li>
					<li>
						<Link to="/portfolio/projects">Projects</Link>
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
