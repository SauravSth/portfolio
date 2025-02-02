import links from '../files/links.json';

import { Link } from 'react-router-dom';

export default function Socials() {
	return (
		<>
			<div id="sideSocials">
				<ul>
					<li>
						<Link to={links.linkedIn} target="_blank">
							<img
								src="images/linkedin.svg"
								alt="LinkedIn Icon"
							/>
						</Link>
					</li>
					<li>
						<Link to={links.github} target="_blank">
							<img src="images/github.svg" alt="Github Icon" />
						</Link>
					</li>
					<li>
						<Link to={links.portfolio} target="_blank">
							<img
								src="images/portfolio.svg"
								alt="Portfolio Icon"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
