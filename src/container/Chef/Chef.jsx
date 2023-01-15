import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Chef.css';

const Chef = () => (
	<div className='section__padding app__bg'>
		<div className='app__wrapper'>
			<div className='chef__img'>
				<img src={images.chef} alt='chefImg' />
			</div>
			<div className='chef__text'>
				<SubHeading className='subhead-chef'>
					<h4>Chef's Word</h4>
				</SubHeading>
				<h2 className='headtext__cormorant'>What We Belive In</h2>
				<div className='chef__desc'>
					<img src={images.quote} alt='qoute' />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
				</div>
				<p className='p_text_bottom'>
					Optio architecto placeat quam. Nesciunt doloremque deserunt
					quod fugiat odio, molestiae laborum.
				</p>
				<h3>Kevin Luo</h3>
				<p className='sing_text'>Chef & Founder</p>
				<img src={images.sign} alt='sign' className='sign_img' />
			</div>
		</div>
	</div>
);

export default Chef;
