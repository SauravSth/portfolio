import { Link } from 'react-router-dom';

export default function MyLinks() {
	return (
		<div id="myLinksWrapper">
			<h1 className="heading">Some of my links: </h1>
			<div className="titleAndLink">
				<div
					className="icon"
					style={{ backgroundImage: `url("/images/linkedin.svg")` }}
				></div>
				<Link
					to={'https://www.linkedin.com/in/sauravshrestha28'}
					target="_blank"
				>
					LinkedIn
				</Link>
			</div>
			<div className="titleAndLink">
				<div
					className="icon"
					style={{ backgroundImage: `url("/images/github.svg")` }}
				></div>
				<Link to={'https://github.com/SauravSth'} target="_blank">
					Github
				</Link>
			</div>
			<div className="email">
				<h1 className="heading">Email me on </h1>
				<div className="titleAndLink">
					<div
						className="icon"
						style={{ backgroundImage: `url("/images/email.svg")` }}
					></div>
					<p>sauravshrestha28@gmail.com</p>
				</div>
			</div>
		</div>
	);
}
