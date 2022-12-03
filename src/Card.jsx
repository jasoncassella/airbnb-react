/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

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
