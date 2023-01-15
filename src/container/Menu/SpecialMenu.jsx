import React from 'react';
import { SubHeading } from '../../components';
import data from '../../constants/data';
import images from '../../constants/images';

import './SpecialMenu.css';

console.log(data.wines);

const SpecialMenu = () => {
	return (
		<div className='app__specialMenu'>
			<SubHeading className='subhead_spec'>
				<h4>Menu That Feat Special</h4>
			</SubHeading>
			<h2 className='headtext__cormorant'>Today's Special</h2>
			<div className='app__specilaMenu__wrapper'>
				<div className='wineList'>
					<h2 className='p__cormorant'>Wine & Beer</h2>
					{data.wines.map((item) => {
						return (
							<div className='winesListMenu'>
								<div className='winesTitle'>
									<h3>{item.title}</h3>
									<p>{item.tags}</p>
								</div>
								<div className='winesLine' />
								<div className='winesPrice'>
									<p>{item.price}</p>
								</div>
							</div>
						);
					})}
				</div>

				<img src={images.menu} alt='menuImg' className='menu_img' />

				<div className='wineList'>
					<h2 className='p__cormorant'>Coctails</h2>
					{data.cocktails.map((item) => {
						return (
							<div className='winesListMenu'>
								<div className='winesTitle'>
									<h3>{item.title}</h3>
									<p>{item.tags}</p>
								</div>
								<div className='winesLine' />
								<div className='winesPrice'>
									<p>{item.price}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<button className='custom__button btn_menu'>View More</button>
		</div>
	);
};

export default SpecialMenu;
