// IMPORTS
import { Route, Routes } from 'react-router-dom';

// COMPONENTS AND FILES
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// PAGES
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<div id="wrapper">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Project />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
