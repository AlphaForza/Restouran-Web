import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import { data } from '../../constants';

import './Laurels.css';

const Laurels = () => {
	return (
		<div className='app__laurels app__bg app__wrapper section__padding'>
			<div className='app__laurels_info'>
				<SubHeading>
					<h3 className='title_laurels'>Awards & Recognition</h3>
				</SubHeading>
				<h2 className='headtext__cormorant'>Our Laurels</h2>
				<div className='app__laurels_wrapper'>
					{data.awards.map((item) => {
						return (
							<div className='app__laurels_card'>
								<img src={item.imgUrl} alt='img' />
								<div className='app__laurels_text'>
									<h4>{item.title}</h4>
									<p>{item.subtitle}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='app__laurels_img'>
				<img src={images.laurels} alt='laurels' />
			</div>
		</div>
	);
};

export default Laurels;
