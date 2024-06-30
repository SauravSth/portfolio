import { useState, useEffect } from 'react';

import ProjectCard from '../components/ProjectCard';

export default function Contact() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/SauravSth/repos')
			.then((res) => res.json())
			.then((results) => {
				const projectCard = results.map((result) => (
					<ProjectCard
						key={result.id}
						name={result.name}
						url={result.clone_url}
						language={result.language}
					/>
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
