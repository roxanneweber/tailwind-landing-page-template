import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeroHome() {
	const [daily, setDaily] = useState([]);

	return (
		<section className='relative'>
			{/* Illustration behind hero content */}
			<div
				className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none'
				aria-hidden='true'
			>
				<svg
					width='1360'
					height='578'
					viewBox='0 0 1360 578'
					xmlns='http://www.w3.org/2000/svg'
				>
					<defs>
						<linearGradient
							x1='50%'
							y1='0%'
							x2='50%'
							y2='100%'
							id='illustration-01'
						>
							<stop stopColor='#FFF' offset='0%' />
							<stop stopColor='#EAEAEA' offset='77.402%' />
							<stop stopColor='#DFDFDF' offset='100%' />
						</linearGradient>
					</defs>
					<g fill='url(#illustration-01)' fillRule='evenodd'>
						<circle cx='1232' cy='128' r='128' />
						<circle cx='155' cy='443' r='64' />
					</g>
				</svg>
			</div>

			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				{/* Hero content */}

				{/* Section header */}
				<div className='text-center pb-12 md:pb-16'>
					<h1
						className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
						data-aos='zoom-y-out'
					>
						Images
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
							Daily
						</span>
					</h1>
					<div className='max-w-3xl mx-auto'>
						<p
							className='text-xl text-gray-600 mb-8'
							data-aos='zoom-y-out'
							data-aos-delay='150'
						>
							Thank you for visiting our site! Enjoy our daily NASA image
							below.
						</p>
						<div
							className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
							data-aos='zoom-y-out'
							data-aos-delay='300'
						></div>
					</div>

					{/* Hero image */}
					<div>
						<div
							className='relative flex justify-center mb-8'
							data-aos='zoom-y-out'
							data-aos-delay='450'
						>
							{useEffect(() => {
								axios
									.get(
										'https://api.nasa.gov/planetary/apod?api_key=Rz30JyD2a2ysf2lhBMAwC9RgnPpsq0Jliv0jScXG'
									)
									.then((res) => {
										console.log(res.data);
										setDaily(res.data);
									})
									.catch((err) => console.error(err));
							}, [])}

							<div>
								<h1>{daily.title}</h1>
								<h3>
									{daily.copyright} - {daily.date}
								</h3>
								<div>
									<img src={daily.url} alt='a daily NASA photograph' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
