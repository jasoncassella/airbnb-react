import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

export default function App() {
	const cardElements = data.map(experience => (
		<Card
			img={experience.coverImg}
			rating={experience.stats.rating}
			reviewCount={experience.stats.reviewCount}
			location={experience.location}
			title={experience.title}
			price={experience.price}
		/>
	));
	return (
		<div className='app'>
			<Navbar />
			{/* <Hero /> */}
			{cardElements}
		</div>
	);
}
