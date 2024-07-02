import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';

import skills from '../files/skills.json';
import MyLinks from '../components/MyLinks';

export default function Contact() {
	const navigate = useNavigate();
	let skillData = skills;
	let skillArray = [];
	for (const skill in skillData) {
		skillArray.push(
			<Card
				key={skill}
				title={skill}
				description={skillData[skill].description}
				img={skillData[skill].img}
			/>
		);
	}

	return (
		<>
			<div id="bannerWrapper">
				<div id="bannerLeft">
					<h1 className="bannerText">
						Hello! I'm Saurav.👋
						<br /> An aspiring full stack developer.
					</h1>
					<p className="subheading">
						Learning to become a Full-Stack Developer. Proficient in
						NodeJS and still learning.
					</p>
					<button onClick={() => navigate('/projects')}>
						Check out my projects
					</button>
				</div>
				<div id="bannerRight">
					<img
						src="/portfolio/images/mern.jpg"
						alt="MERN Stack Image"
					/>
				</div>
			</div>
			<div id="skillsWrapper">
				<h1 className="heading">My Skill Set</h1>
				<div id="cardWrapper">{skillArray}</div>
				<div className="aside">
					<MyLinks />
				</div>
			</div>
		</>
	);
}
