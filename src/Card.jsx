export default function Card(props) {
	return (
		<div className='card'>
			<img src={`/src/assets/${props.img}`} width='176' />
			<div className='line-1'>
				<img src='/src/assets/star.png' width='14' />
				<span>{props.rating}</span>
				<span className='gray'>({props.reviewCount})</span>
				<img src='/src/assets/Ellipse-6.png' width='2' />
				<span className='gray'>{props.location}</span>
			</div>
			<div className='line-2'>
				<span>{props.title}</span>
			</div>
			<div className='line-3'>
				<span className='bold'>From {props.price}</span>
				<span> / person</span>
			</div>
		</div>
	);
}
