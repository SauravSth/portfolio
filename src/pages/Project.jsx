import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/SauravSth/repos')
			.then((res) => res.json())
			.then((results) => {
				const projectCard = results.map((result) => (
					<div className="projectCard" key={result.id}>
						<div className="projectName">
							<h2>Project Title: </h2>
							<p>{result.name}</p>
						</div>
						<div className="projectURL">
							<h2>Link:</h2>
							<Link to={result.clone_url} target="_blank">
								{result.url}
							</Link>
						</div>
						<div className="projectLanguage">
							<h2>Language:</h2>
							<p>{result.language}</p>
						</div>
						<br />
					</div>
				));
				setProjects(projectCard);
			});
	}, []);
	return (
		<>
			<h1 className="heading">Here are some of my projects!</h1>
			<div id="projectContainer">{projects}</div>
		</>
	);
}
