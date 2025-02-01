export default function Footer() {
	return (
		<footer>
			<div className="ft container">
				<div className="footerLeft">
					<div className="footerHeading">
						<h2>Saurav Shrestha</h2>
					</div>
					<p>
						A passionate result-oriented Web Developer skilled in
						crafting scalable and user-centric web solutions that
						lead to success of projects
					</p>
				</div>
				<div className="footerRight">
					<div className="footerHeading">
						<h2>Socials</h2>
					</div>
					<ul>
						<li>
							<img
								src="images/linkedin.svg"
								alt="LinkedIn Icon"
							/>
						</li>
						<li>
							<img src="images/github.svg" alt="Github Icon" />
						</li>
						<li>
							<img
								src="images/portfolio.svg"
								alt="Portfolio Icon"
							/>
						</li>
					</ul>
				</div>
				<div className="trademark">
					Copyright of &copy; Saurav Shrestha | 2025
				</div>
			</div>
		</footer>
	);
}
