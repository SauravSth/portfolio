import { useState } from 'react';
import { useEffect } from 'react';

export default function Contact() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/SauravSth/repos')
			.then((res) => res.json())
			.then((results) => {
				const projectCard = results.map((result) => (
					<h1 key={result.id}>Project Name: {result.name}</h1>
				));
				setProjects(projectCard);
			});
	}, []);
	return (
		<>
			<h1 className="heading">
				Here are some of the projects I've done!
			</h1>
			{projects}
		</>
	);
}
