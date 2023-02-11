import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styled, { keyframes } from 'styled-components';

const TextContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center center;
	color: var(--white);
`;

const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`;
const TextBlock = styled.div`
	display: flex;
	width: 80%;
	position: fixed;
	height: 100vh;
	top: 0;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	@media (min-width: 800px) {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 25rem));
		gap: 2rem;
		padding: 3rem;

		> * {
			grid-column: var(--col, 1);
			opacity: 0;
		}
	}
`;

const Text = styled.p`
	width: 90%;
	position: relative;
	height: var(--fontxl);
	overflow: hidden;
	@media (min-width: 780px) {
		width: 50%;
	}
	span {
		animation-name: ${moveUp};
		animation-duration: 2.5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-delay: ${(props) => props.delay};
		transform: translateY(5rem);
		background-image: linear-gradient(-45deg, var(--gradientY));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: var(--fontlg);
		height: var(--fontxl);
		position: absolute;
		@media (min-width: 1000px) {
			font-size: var(--fontxl);
			height: var(--fontxl);
		}
	}

	.author {
		font-size: var(--fontlg);
	}

	.indicator {
		text-align: center;
		position: fixed;
		top: 60%;
		left: 25%;
		transform: translate3d(-50%, 0, 0);

		span {
			font-size: 45px;
			display: block;
			background-image: linear-gradient(-45deg, var(--gradientY));
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			&:nth-child(2) {
				animation: arrowMove 600ms infinite alternate;
			}
		}
	}
`;

const PathAnimation = () => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(MotionPathPlugin);

	useEffect(() => {
		const rx = window.innerWidth < 300 ? window.innerWidth / 1200 : 1;
		const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;
		const fireOne = document.querySelector('.fireBit');

		const path = [
			// 1
			{ x: 100, y: 200 },
			{ x: 700, y: 400 },
			{ x: 1100, y: 800 },
			// 2
			{ x: 1000, y: 200 },
			{ x: 300, y: -20 },
			{ x: 10, y: 500 },
			// 3
			{ x: 100, y: 300 },
			{ x: 500, y: 400 },
			{ x: 1000, y: 200 },
			// 4
			{ x: 1100, y: 300 },
			{ x: 400, y: 400 },
			{ x: 200, y: 250 },
			// 5
			{ x: 100, y: 300 },
			{ x: 500, y: 450 },
			{ x: 1100, y: 500 },
		];

		const scaledPath = path.map(({ x, y }) => {
			return {
				x: x * rx,
				y: y * ry,
			};
		});

		const sections = [...document.querySelectorAll('section')];
		const robot = document.querySelector('.robot');
		const robotHeadAndBody = [
			...document.querySelectorAll('.robot__head'),
			...document.querySelectorAll('.robot__body'),
		];
		const lights = [...document.querySelectorAll('[data-lights]')];
		const rays = document.querySelector('[data-rays]');

		const bubbles = gsap.timeline();
		bubbles.set('.bubbles__bubble', {
			y: 100,
		});
		bubbles.to('.bubbles__bubble', {
			scale: 1.2,
			y: -300,
			opacity: 1,
			duration: 2,
			stagger: 0.2,
		});
		bubbles.to(
			'.bubbles__bubble',
			{
				scale: 1,
				opacity: 0,
				duration: 1,
			},
			'-=1'
		);

		bubbles.pause();

		const tl = gsap.timeline({
			scrollTrigger: {
				scrub: 1.5,
			},
		});
		tl.to(robot, {
			motionPath: {
				path: scaledPath,
				align: 'self',
				alignOrigin: [0.5, 0.5],
				autoRotate: true,
			},
			duration: 10,
			immediateRender: true,
		});
		tl.to(
			'.indicator',
			{
				opacity: 0,
			},
			0
		);
		console.log(tl);
		tl.to(
			robot,
			{
				opacity: 0.7,
				scale: 3,
			},
			1
		);
		tl.to(
			robot,
			{
				opacity: 1,
				scale: 1,
			},
			2.5
		);
		tl.to(
			robot,
			{
				rotate: -250,
				z: 1500,
				duration: 2,
			},
			2.5
		);
		tl.to(
			robot,
			{
				scale: 2,
			},
			4
		);
		tl.to(
			robot,
			{
				rotate: 0,
			},
			5.5
		);
		tl.to(
			robot,
			{
				z: 850,
				duration: 2,
			},
			5
		);
		tl.to(
			robot,
			{
				rotate: 0,
				duration: 1,
			},
			'-=1'
		);
		tl.to(
			'.robot__skeleton',
			{
				opacity: 0.6,
				duration: 0.1,
				repeat: 4,
			},
			'-=3'
		);
		tl.to(
			robotHeadAndBody,
			{
				opacity: 0,
				duration: 0.1,
				repeat: 4,
			},
			'-=3'
		);
		tl.to(
			'.robot__inner',
			{
				opacity: 0.1,
				duration: 1,
			},
			'-=1'
		);
		tl.to(
			'.robot__skeleton',
			{
				opacity: 0.1,
				duration: 1,
			},
			'-=1'
		);

		bubbles.play();
		tl.pause();

		const lightsTl = gsap.timeline({
			scrollTrigger: {
				scrub: 6,
			},
		});
		lightsTl.from(
			lights[0],
			{
				x: window.innerWidth * -1,
				y: window.innerHeight,
				ease: 'power4.out',
				duration: 80,
			},
			0
		);
		lightsTl.to(
			lights[0],
			{
				x: window.innerWidth,
				y: window.innerHeight * -1,
				ease: 'power4.out',
				duration: 80,
			},
			'-=5'
		);

		const makeBubbles = (p, i) => {
			const { top, left } = robot.getBoundingClientRect();
			gsap.to(p, { opacity: 1, duration: 1 });
			gsap.set('.bubbles', {
				x: left,
				y: top,
			});
			if (bubbles.paused) {
				bubbles.restart();
			}
			if (i > 6) {
				gsap.to('.bubbles', {
					opacity: 0,
				});
			}
		};

		const rotaterobot = (self) => {
			if (self.direction === -1) {
				gsap.to(robot, { rotationY: 180, duration: 0.4 });
			} else {
				gsap.to(robot, { rotationY: 0, duration: 0.4 });
			}
		};

		const hideText = (p) => {
			gsap.to(p, { opacity: 0, duration: 1 });
		};

		gsap.timeline({
			defaults: {
				ease: 'expo.inOut',
				stagger: 0.12,
				duration: 2,
			},
			repeat: -1,
		});
		tl.to('.cube', { rotateY: -90 }, 0);
		tl.to('.cube .cube__face--front', { skewX: 30 }, 0);
		tl.from('.cube .cube__face--right', { skewX: 30 }, 0.15);
		tl.to('.cube .cube__face--front', { backgroundPosition: '0% 50%' }, 0);
		tl.to(
			'.cube .cube__face--right',
			{ backgroundPosition: '0% 50%' },
			0.15
		);

		sections.forEach((section, i) => {
			const p = section.querySelector('p');
			gsap.to(p, { opacity: 0 });

			ScrollTrigger.create({
				trigger: section,
				start: 'top top',
				onEnter: () => makeBubbles(p, i),
				onEnterBack: () => {
					if (i <= 6) {
						gsap.to('.bubbles', {
							opacity: 1,
						});
					}
				},
				onLeave: () => {
					hideText(p);
					if (i === 0) {
						gsap.to('.fireBit', {
							opacity: 0,
							y: -500,
							duration: 8,
							ease: 'power4.in',
						});
					}
				},
				onLeaveBack: () => hideText(p),
				onUpdate: (self) => rotaterobot(self),
			});
		});
	}, []);
	return (
		<>
			<TextContainer>
				<Text delay="0s">
					{' '}
					<span>THE WEIGHT OF LOVE</span>{' '}
				</Text>
				<Text delay="0.4s">
					{' '}
					<span className="author">The Black Keys</span>{' '}
				</Text>
				<Text>
					{' '}
					<p className="indicator">
						<span></span>
						<span>↓</span>
					</p>
				</Text>
			</TextContainer>

			<div class="robot-wrapper">
				<div class="robot">
					<div class="robote">
						<svg
							id="robot"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -10 960 570">
							<g class="lean">
								<g class="levitate">
									<polygon
										class="flame"
										fill="var(--yellow)"
										points="469.333,328 493.667,328 481.63,560.667 "
									/>
									<polygon
										class="flame"
										fill="var(--red)"
										points="469.333,310 493.667,328 481.63,420.667 "
									/>

									<g>
										<rect
											x="442"
											y="276"
											fill="#CCCCCC"
											width="39"
											height="65"
										/>
										<circle
											fill="#CCCCCC"
											cx="461.001"
											cy="277.087"
											r="19.427"
										/>
										<rect
											x="481"
											y="276"
											fill="#CCCCCC"
											width="38"
											height="65"
										/>
										<circle
											fill="#CCCCCC"
											cx="500.307"
											cy="277.087"
											r="19.427"
										/>
										<polygon
											fill="#CCCCCC"
											points="508.885,348 454.731,348 468.616,335 494.998,335 	"
										/>
									</g>

									<circle
										fill="var(--gray-300)"
										cx="515.25"
										cy="279"
										r="17.75"
									/>
									<circle
										fill="var(--gray-300)"
										cx="447.25"
										cy="279"
										r="17.75"
									/>

									<rect
										x="447"
										y="241"
										fill="var(--gray-500)"
										width="67"
										height="65"
									/>

									<circle
										fill="var(--gray-200)"
										cx="480.5"
										cy="305.5"
										r="33.5"
									/>
								</g>
							</g>

							<g class="head">
								<g class="levitate">
									<circle
										transform="translate(10 115)"
										fill="var(--red)"
										cx="470"
										cy="56.087"
										r="92.427"
									/>
									<g>
										<path
											fill="var(--gray-100)"
											transform="translate(10 0)"
											d="M370.065,176c-0.001,0-0.004-0.065-0.004,0.028c0,48.908,44.819,88.43,100.106,88.43
            c55.286,0,100.105-39.46,100.105-88.368c0-0.093-0.004-0.09-0.004-0.09H370.065z"
										/>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>

			<div class="bubbles">
				<div class="bubbles__inner">
					<div class="bubbles__bubble"></div>
					<div class="bubbles__bubble"></div>
					<div class="bubbles__bubble"></div>
				</div>
			</div>

			<div class="content">
				<section>
					<TextBlock delay="0s">
						<p>
							I used to think, darling, you never did nothing But
							you were always up to something Always had a run in,
							yeah I got to think those days are coming to get ya
							Now no body want to protect ya They only want to
							forget ya
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on my mind Don't give yourself away To the
							weight of love You'll be on your side Don't give
							yourself away The weight of, weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							Dance all night cause people they don't wanna be
							lonely Never wanna be lonely They don't wanna be
							lonely You have a thing no one could ever be sure of
							Never ever had a pure love And never no cure from
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on my mind Don't give yourself away To the
							weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on your side Don't give yourself away The
							weight of, weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on my mind Don't give yourself away To the
							weight of love You'll be on your side Don't give
							yourself away The weight of, weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on my mind Don't give yourself away To the
							weight of love You'll be on your side Don't give
							yourself away The weight of, weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							Dance all night cause people they don't wanna be
							lonely Never wanna be lonely They don't wanna be
							lonely You have a thing no one could ever be sure of
							Never ever had a pure love And never no cure from
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p>
							You'll be on my mind Don't give yourself away To the
							weight of love You'll be on your side Don't give
							yourself away The weight of, weight of love
						</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p className="big">Weight of Love</p>
					</TextBlock>
				</section>
				<section>
					<TextBlock delay="0s">
						<p className="big"> The Black Keys</p>
					</TextBlock>
				</section>
			</div>
		</>
	);
};

export default PathAnimation;
