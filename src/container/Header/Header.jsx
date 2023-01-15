import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';

import './Header.css';

const Header = (props) => (
	<div id='Home' className='app__header section__padding'>
		<div className='app__wrapper'>
			<div className='app__header-leftside'>
				<SubHeading className='subheading_header'>
					<h3 className='header-text'>Chase The New Flavour</h3>
				</SubHeading>
				<h2 className='headtext__cormorant'>
					The Key To <br /> Fine Dining
				</h2>
				<p className='p__opensans'>
					Sit tellus lobortis sed senectus vivamus molestie.
					Condimentum volutpat morbi facilisis quam scelerisque
					sapien. Et, penatibus aliquam amet tellus{' '}
				</p>
				<button className='custom__button'>Explore Menu</button>
			</div>

			<div className='app__header-rightside '>
				<img src={images.welcome} alt='chef-img' className='' />
			</div>
		</div>
	</div>
);

export default Header;
