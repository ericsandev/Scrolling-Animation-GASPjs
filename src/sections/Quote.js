import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
	width: 100vw;
	height: 100vh;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`;

const TextContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--offWhite);
	color: var(--white);
`;

const Text = styled.p`
	width: 50%;
	font-size: var(--fontxxl);
	position: relative;
	height: var(--fontmd);
	overflow: hidden;

	span,
	.author {
		position: absolute;
		transform: translateY(5rem);
		animation-name: ${moveUp};
		animation-duration: 2.5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-delay: ${(props) => props.delay};
		font-family: var(--fontL);
		background-image: linear-gradient(-45deg, var(--gradient));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.author {
		width: 100%;
		text-align: start;
		font-family: var(--fontR);
		font-size: var(--fontxxs);
	}

	@media screen and (max-width: 70em) {
		width: 70%;
	}

	@media screen and (max-width: 48em) {
		font-size: var(--fontmd);
		height: var(--fontsm);
	}
	@media screen and (max-width: 40em) {
		width: 90%;
	}
	@media screen and (max-width: 30em) {
		font-size: var(--fontxs);
	}
`;

const Quote = () => {
	gsap.registerPlugin(ScrollTrigger);
	const sectionRef = useRef(null);
	const fire = useRef(null);

	// Letter animation
	useLayoutEffect(() => {
		let Elem = sectionRef.current;

		let trigger = ScrollTrigger.create({
			trigger: Elem,
			start: 'top top',
			pin: false,
			pinSpacing: true,
		});

		return () => {
			if (trigger) trigger.kill();
		};
	}, []);
	// Fire
	useLayoutEffect(() => {
		let t1 = gsap
			.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top-=500 top',
					end: 'bottom top',
					scrub: 1,
				},
			})
			.fromTo(fire.current, { x: 0 }, { x: '10%' }, 'key1');
		console.log(fire);

		return () => {
			if (t1) t1.kill();
		};
	}, []);
	return (
		<Section ref={sectionRef}>
			<TextContainer>
				<Text delay="0s">
					<span>ERIC SÁNCHEZ</span>{' '}
				</Text>
				<Text delay="0.4s">
					{' '}
					<span className="author">Frontend Developer</span>{' '}
				</Text>
				<Text>
					{' '}
					<p className="indicator">
						<span></span>
						<span>↓</span>
					</p>
				</Text>
			</TextContainer>
		</Section>
	);
};

export default Quote;
