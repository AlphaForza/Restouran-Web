import React from 'react';
import images from '../../constants/images';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	@media screen and (max-width: 560px) {
		align-items: center;
		justify-content: center;
	}

	/* color: #fff; */
`;

const SubHeading = (props) => (
	<Wrapper className={`app__subheading ${props.className}`}>
		{props.children}
		<img src={images.spoon} alt='' />
	</Wrapper>
);

export default SubHeading;
