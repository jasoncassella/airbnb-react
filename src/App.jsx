import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

export default function App() {
	const cards = data.map(experience => (
		<Card key={experience.id} {...experience} />
	));
	return (
		<div className='app'>
			<Navbar />
			{/* <Hero /> */}
			<section className='cards-list'>{cards}</section>
		</div>
	);
}
