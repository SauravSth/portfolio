export default function Card(props) {
	let setBackgroundImage = {
		backgroundImage: `url("/portfolio/images/${props.img}")`,
	};
	return (
		<div className="card">
			<div className="icon" style={setBackgroundImage}></div>
			<div className="cardTitle">
				<p>{props.title}</p>
			</div>
			<div className="cardDescription">
				<p>{props.description}</p>
			</div>
		</div>
	);
}
