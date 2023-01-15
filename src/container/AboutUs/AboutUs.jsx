import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
	<div className='app__aboutus app__bg section__padding app__wrapper'>
		<div className='app__wrapper'>
			<div className='aboutLeftside'>
				<SubHeading className='about__headingLeft'>
					<h2 className='headtext__cormorant'>About Us</h2>
				</SubHeading>
				<p className='p__opensans'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat, quos? Sequi qui quo aperiam, esse dolorem
					assumenda facilis nostrum accusamus?
				</p>
				<button className='custom__button'>Know More</button>
			</div>
			<img src={images.knife} alt='knifeImg' className='knife-img' />
			<div className='aboutRightside'>
				<SubHeading className='about__headingRight'>
					<h2 className='headtext__cormorant'>About Us</h2>
				</SubHeading>
				<p className='p__opensans'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat, quos? Sequi qui quo aperiam, esse dolorem
					assumenda facilis nostrum accusamus?
				</p>
				<button className='custom__button'>Know More</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
