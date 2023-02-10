import React from 'react';
import styled, { keyframes } from 'styled-components';
import a15 from '../assets/Images/1454.webp';

const Section = styled.section`
	width: 100vw;
	height: 100vh;
	position: relative;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	background-color: var(--offWhite);
	color: var(--green);
	overflow: hidden;
`;

const TitleBlur = styled.h1`
	filter: blur(8px);
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: var(--fontBig);
	font-family: var(--fontL);
	z-index: 1;
	background-image: linear-gradient(180deg, var(--gradientY));

	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: 70em) {
		font-size: var(--fontxxxl);
	}
	@media screen and (max-width: 64em) {
		font-size: var(--fontxxl);
	}
	@media screen and (max-width: 48em) {
		font-size: var(--fontxl);
	}
`;
const Title = styled.h1`
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: var(--fontBig);
	font-family: var(--fontL);
	z-index: 2;
	background-image: linear-gradient(180deg, var(--gradientY));

	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: 70em) {
		font-size: var(--fontxxxl);
	}
	@media screen and (max-width: 64em) {
		font-size: var(--fontxxl);
	}
	@media screen and (max-width: 48em) {
		font-size: var(--fontxl);
	}
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 30px var(--green);
}
50%{
    box-shadow: 2px 2px 45px var(--green);
}
100%{
    box-shadow: 1px 1px 20px var(--green);
}
`;

const Processor = styled.div`
	width: 25%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	animation: ${glow} 3s ease infinite;
	img {
		border-radius: 20px;
	}
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: 48em) {
		display: none;
	}
`;

const ProcessorSection = () => {
	return (
		<Section id="proccesor">
			<TitleBlur>GLOW</TitleBlur>
			<Title>GLOW</Title>
			<Processor>
				<img src={a15} alt="A15 processor" />
			</Processor>
		</Section>
	);
};

export default ProcessorSection;
