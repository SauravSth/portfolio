// IMPORTS
import { Route, Routes } from 'react-router-dom';

// COMPONENTS AND FILES
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Socials from './components/Socials';
import './App.css';

// PAGES
import Home from './pages/Home';

function App() {
	return (
		<>
			<Navbar />
			<Socials />
			<main>
				<div id="wrapper">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
