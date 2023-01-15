import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
	const [playVideo, setPlayVideo] = React.useState(false);
	const vidRef = React.useRef(false);

	function handleVideo() {
		setPlayVideo((prevPlayVideo) => !prevPlayVideo);

		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
		console.log(playVideo);
	}

	return (
		<div className='app__video'>
			<video
				ref={vidRef}
				src={meal}
				type='video/mp4'
				loop
				controls={false}
				muted
			/>
			<div className='app__video-overlay flex__center'>
				<div
					className='app__video-button-circle flex__center'
					onClick={handleVideo}>
					{playVideo ? (
						<BsPauseFill style={{ color: '#fff', fontSize: '30' }} />
					) : (
						<BsFillPlayFill
							style={{ color: '#fff', fontSize: '30' }}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
