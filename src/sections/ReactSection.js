import gsap from 'gsap';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import v1 from '../assets/video/Scuba Diving - 699.mp4';

const Section = styled.section`
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	background-color: var(--offWhite);
	overflow: hidden;
	perspective: 100rem;
	perspective-origin: center center;
	transform-style: preserve-3d;
`;
const moveUp = keyframes`
100%{
    transform: translateY(100);
}
`;

const rotate = keyframes`
@keyframes raysRotate {
	50% {
		transform: rotate(180deg) scale(1.5);
	}
	100% {
		transform: rotate(360deg) scale(1);
	}
}`;

const Welcome = styled.h1`
	font-size: var(--fontBig);
	color: var(--green);
	position: absolute;
	transform: rotate(-35deg);
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 2;
	animation-name: ${moveUp};
	margin-left: 6rem;
	animation-delay: ${(props) => props.delay};
	animation-duration: 2.5s;
	animation-timing-function: ease;
	animation-fill-mode: forwards;
`;

const FireContainer = styled.p`
	width: 100%;
	height: 50vh;
	z-index: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: var(--dark);

	span {
		font-size: var(--fontBig);
		width: 90%;
		font-weight: 600;
		text-transform: capitalize;
	}

	@media screen and (max-width: 70em) {
		span {
			font-size: var(--fontxxxl);
		}
	}
	@media screen and (max-width: 64em) {
		span {
			font-size: var(--fontxxl);
		}
	}
	@media screen and (max-width: 48em) {
		span {
			font-size: var(--fontlg);
		}
	}
`;

const V1 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	background: var(--blue);
	z-index: 2;
	color: var(--white);
	display: flex;
	flex-direction: column;
	font-size: var(--fontxxxl);
	justify-content: center;
	align-items: center;
`;

const ReactSection = () => {
	//fires
	const sectionRef = useRef(null);

	const fire = useRef(null);
	const textRef = useRef(null);
	const videoRef1 = useRef(null);
	const textRef2 = useRef(null);

	let elements = gsap.utils.selector(textRef);
	let elements2 = gsap.utils.selector(textRef2);

	//Fires
	useLayoutEffect(() => {
		const video1Elem = videoRef1.current;
		const Elem = sectionRef.current;

		let t2 = gsap
			.timeline({
				scrollTrigger: {
					trigger: Elem,
					start: 'top top',
					end: `bottom+=500 bottom`,
					scrub: 1,
				},
			})
			.to(video1Elem, { scale: 0.4 }, 'key1');

		elements('h1').forEach((el) =>
			t2.fromTo(
				el,
				{
					scrollTrigger: {
						trigger: el,
						start: 'top top',
						end: `bottom+=500 bottom`,
						scrub: 1,
					},
					x: -700,
					y: -250,
					scale: 2,
					opacity: 1,
				},
				{
					x: 0,
					y: -200,
					scale: 1,
					opacity: 1,
				}
			)
		);

		elements2('h1').forEach((el) =>
			t2.fromTo(
				el,
				{
					scrollTrigger: {
						trigger: el,
						start: 'top top',
						end: `bottom+=500 bottom`,
						scrub: 1,
					},
					x: -200,
					y: -100,
					scale: 2,
					opacity: 1,
				},
				{
					x: 180,
					y: -200,
					scale: 1,
					opacity: 1,
				}
			)
		);

		let t3 = gsap
			.timeline({
				scrollTrigger: {
					trigger: Elem,
					start: 'top top',
					end: 'bottom+=400 bottom',
					scrub: 0.2,
					scale: 0.2,
					pin: true,
					endTrigger: '#glow',
				},
			})
			.fromTo(fire.current, { x: 0 }, { x: '10%' }, 'key1');
		console.log('design', t3);

		return () => {
			if (t3) t3.kill();
			if (t2) t2.kill();
		};
	}, []);

	return (
		<Section id="third" ref={sectionRef}>
			<V1 ref={videoRef1}>
				<p>1+ Years</p>
				<h2>React</h2>
			</V1>

			<FireContainer ref={textRef}>
				<Welcome className="blue">JAVASCRIPT</Welcome>
				<Welcome className="green">JAVASCRIPT</Welcome>
				<Welcome className="blueDark">JAVASCRIPT</Welcome>
			</FireContainer>

			<FireContainer ref={textRef2}>
				<Welcome id="red" className="blue">
					JSX
				</Welcome>
				<Welcome className="green"> JSX</Welcome>
				<Welcome className="blueDark"> JSX</Welcome>
			</FireContainer>
		</Section>
	);
};

export default ReactSection;
