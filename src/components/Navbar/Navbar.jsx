import { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';

import { FaHamburger } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import React from 'react';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	function handleToggle() {
		setToggle((prevToggle) => !prevToggle);
	}
	return (
		<div id='Home' className='app__navbar'>
			<img
				src={images.gericht}
				alt='logo-img'
				className='logo-navbar'
			/>

			<ul>
				{['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'].map(
					(item) => {
						return (
							<li className='app__navbar-menu'>
								<a href={`#${item}`}>{item}</a>
							</li>
						);
					}
				)}
			</ul>

			<div className='app__navbar-login'>
				<div className='app__navbar-loing-text'>
					<h3>Log in</h3>
					<span>/</span>
					<h3>Registration</h3>
				</div>
				<span>|</span>
				<h3>Book Table</h3>
			</div>

			{toggle ? (
				<div className='menu-bar'>
					<ul>
						<AiOutlineCloseCircle
							className='close-btn'
							onClick={handleToggle}
						/>
						{['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'].map(
							(item) => {
								return (
									<li className='menu-bar-item'>
										<a href={`#${item}`} onClick={handleToggle}>
											{item}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>
			) : (
				<FaHamburger className='burger' onClick={handleToggle} />
			)}
		</div>
	);
};

export default Navbar;
