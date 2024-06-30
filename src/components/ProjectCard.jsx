import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	return (
		<div className="projectCard">
			<div className="projectName">
				<h2>Project Title: </h2>
				<p>{props.name}</p>
			</div>
			<div className="projectURL">
				<h2>Link:</h2>
				<Link to={props.url} target="_blank">
					{props.url}
				</Link>
			</div>
			<div className="projectLanguage">
				<h2>Language:</h2>
				<p>{props.language}</p>
			</div>
		</div>
	);
}
