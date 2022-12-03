export default function Card() {
	return (
		<div className='card'>
			<img src='/src/assets/katie-zaferes.png' width='176' />
			<div className='image-label'>sold out</div>
			<div className='line-1'>
				<img src='/src/assets/star.png' width='14' />
				<span>5.0</span>
				<span className='gray'>(6)</span>
				<img src='/src/assets/Ellipse-6.png' width='2' />
				<span className='gray'>USA</span>
			</div>
			<div className='line-2'>
				<span>Life lessons with Katie Zaferes</span>
			</div>
			<div className='line-3'>
				<span className='bold'>From $136</span>
				<span>/ person</span>
			</div>
		</div>
	);
}
