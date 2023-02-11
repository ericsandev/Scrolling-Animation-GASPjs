import gsap from 'gsap';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 1;
	transition: all 0.3s ease;
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

const FireContainer2 = styled.p`
	width: 100%;
	height: 50vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	color: var(--dark);

	span {
		font-size: var(--fontxxxl);
		width: 80%;
		font-weight: 600;
		text-transform: capitalize;
		align-self: flex-end;
		text-align: right;
	}

	@media screen and (max-width: 70em) {
		span {
			font-size: var(--fontxxl);
		}
	}
	@media screen and (max-width: 64em) {
		span {
			font-size: var(--fontxl);
		}
	}
	@media screen and (max-width: 48em) {
		span {
			font-size: var(--fontlg);
		}
	}
`;
const Fire = styled.div`
--red: #12DDC3;
--orange: #3A85B5;
--yellow: #003636;
--version-one: 14px 16px var(--red), 19px 16px var(--red), 14px 17px var(--red),
15px 17px var(--red), 19px 17px var(--red), 13px 18px var(--red), 14px 18px var(--red),
15px 18px var(--red), 16px 18px var(--red), 19px 18px var(--red), 13px 19px var(--red),
14px 19px var(--red), 15px 19px var(--red), 16px 19px var(--red), 18px 19px var(--red),
19px 19px var(--red), 20px 19px var(--red), 10px 20px var(--red), 12px 20px var(--red),
13px 20px var(--red), 14px 20px var(--red), 15px 20px var(--red), 16px 20px var(--red),
17px 20px var(--red), 18px 20px var(--red), 19px 20px var(--red), 20px 20px var(--red),
22px 20px var(--red), 10px 21px var(--red), 11px 21px var(--red), 12px 21px var(--red),
13px 21px var(--red), 14px 21px var(--orange), 15px 21px var(--orange), 16px 21px var(--orange),
17px 21px var(--orange), 18px 21px var(--orange), 19px 21px var(--orange), 20px 21px var(--red),
21px 21px var(--red), 22px 21px var(--red), 10px 22px var(--red), 11px 22px var(--red),
12px 22px var(--red), 13px 22px var(--red), 14px 22px var(--orange), 15px 22px var(--yellow),
16px 22px var(--yellow), 17px 22px var(--yellow), 18px 22px var(--yellow), 19px 22px var(--orange),
20px 22px var(--red), 21px 22px var(--red), 22px 22px var(--red), 10px 23px var(--red),
11px 23px var(--red), 12px 23px var(--orange), 13px 23px var(--orange), 14px 23px var(--orange),
15px 23px var(--yellow), 16px 23px white, 17px 23px var(--yellow), 18px 23px var(--yellow),
19px 23px var(--orange), 20px 23px var(--red), 21px 23px var(--red), 22px 23px var(--red),
10px 24px var(--red), 11px 24px var(--red), 12px 24px var(--orange), 13px 24px var(--yellow),
14px 24px var(--yellow), 15px 24px white, 16px 24px white, 17px 24px var(--yellow),
18px 24px var(--yellow), 19px 24px var(--orange), 20px 24px var(--red), 21px 24px var(--red),
10px 25px var(--red), 11px 25px var(--red), 12px 25px var(--red), 13px 25px var(--orange),
14px 25px var(--yellow), 15px 25px var(--yellow), 16px 25px white, 17px 25px var(--orange),
18px 25px var(--orange), 19px 25px var(--red), 20px 25px var(--red), 21px 25px var(--red),
11px 26px var(--red), 12px 26px var(--red), 13px 26px var(--red), 14px 26px var(--orange),
15px 26px var(--yellow), 16px 26px var(--yellow), 17px 26px var(--orange), 18px 26px var(--red),
19px 26px var(--red), 20px 26px var(--red), 12px 27px var(--red), 13px 27px var(--red),
14px 27px var(--red), 15px 27px var(--orange), 16px 27px var(--orange), 17px 27px var(--orange),
18px 27px var(--red), 19px 27px var(--red), 13px 28px var(--red), 14px 28px var(--red),
15px 28px var(--red), 16px 28px var(--red), 17px 28px var(--red), 18px 28px var(--red),
19px 28px var(--red), 15px 29px var(--red), 16px 29px var(--red), 17px 29px var(--red),
18px 29px var(--red);
--version-two: 14px 9px var(--red), 17px 11px var(--red), 16px 12px var(--red),
17px 12px var(--red), 15px 13px var(--red), 16px 13px var(--red), 17px 13px var(--red),
20px 13px var(--red), 14px 14px var(--red), 15px 14px var(--red), 16px 14px var(--red),
9px 15px var(--red), 14px 15px var(--red), 15px 15px var(--red), 16px 15px var(--red),
9px 16px var(--red), 10px 16px var(--red), 14px 16px var(--red), 15px 16px var(--red),
16px 16px var(--red), 23px 16px var(--red), 9px 17px var(--red), 10px 17px var(--red),
11px 17px var(--red), 14px 17px var(--red), 15px 17px var(--red), 16px 17px var(--red),
17px 17px var(--red), 9px 18px var(--red), 10px 18px var(--red), 11px 18px var(--red),
12px 18px var(--red), 13px 18px var(--red), 14px 18px var(--red), 15px 18px var(--red),
16px 18px var(--orange), 17px 18px var(--red), 18px 18px var(--red), 21px 18px var(--red),
9px 19px var(--red), 10px 19px var(--red), 11px 19px var(--orange), 12px 19px var(--red),
13px 19px var(--red), 14px 19px var(--red), 15px 19px var(--orange), 16px 19px var(--orange),
17px 19px var(--red), 18px 19px var(--red), 19px 19px var(--red), 20px 19px var(--red),
21px 19px var(--red), 22px 19px var(--red), 9px 20px var(--red), 10px 20px var(--red),
11px 20px var(--orange), 12px 20px var(--orange), 13px 20px var(--orange), 14px 20px var(--orange),
15px 20px var(--yellow), 16px 20px var(--yellow), 17px 20px var(--orange), 18px 20px var(--orange),
19px 20px var(--red), 20px 20px var(--red), 21px 20px var(--red), 22px 20px var(--red),
9px 21px var(--red), 10px 21px var(--red), 11px 21px var(--red), 12px 21px var(--orange),
13px 21px var(--yellow), 14px 21px var(--yellow), 15px 21px var(--yellow), 16px 21px white,
17px 21px var(--yellow), 18px 21px var(--yellow), 19px 21px var(--orange), 20px 21px var(--red),
21px 21px var(--red), 10px 22px var(--red), 11px 22px var(--red), 12px 22px var(--orange),
13px 22px var(--orange), 14px 22px var(--yellow), 15px 22px white, 16px 22px white,
17px 22px white, 18px 22px var(--yellow), 19px 22px var(--orange), 20px 22px var(--red),
21px 22px var(--red), 22px 22px var(--red), 11px 23px var(--red), 12px 23px var(--red),
13px 23px var(--orange), 14px 23px var(--orange), 15px 23px var(--yellow), 16px 23px white,
17px 23px var(--yellow), 18px 23px var(--orange), 19px 23px var(--orange), 20px 23px var(--red),
21px 23px var(--red), 22px 23px var(--red), 11px 24px var(--red), 12px 24px var(--red),
13px 24px var(--red), 14px 24px var(--orange), 15px 24px var(--yellow), 16px 24px var(--yellow),
17px 24px var(--orange), 18px 24px var(--red), 19px 24px var(--red), 20px 24px var(--red),
21px 24px var(--red), 12px 25px var(--red), 13px 25px var(--red), 14px 25px var(--red),
15px 25px var(--orange), 16px 25px var(--orange), 17px 25px var(--orange), 18px 25px var(--red),
19px 25px var(--red), 20px 25px var(--red), 14px 26px var(--red), 15px 26px var(--red),
16px 26px var(--red), 17px 26px var(--red), 18px 26px var(--red), 19px 26px var(--red),
15px 27px var(--red), 16px 27px var(--red), 17px 27px var(--red), 18px 27px var(--red);
--version-three: 23px 7px var(--red), 4px 12px var(--red), 21px 12px var(--red),
12px 13px var(--red), 21px 13px var(--red), 14px 14px var(--red), 15px 14px var(--red),
21px 14px var(--red), 22px 14px var(--red), 14px 15px var(--red), 15px 15px var(--red),
21px 15px var(--red), 22px 15px var(--red), 8px 16px var(--red), 14px 16px var(--red),
15px 16px var(--red), 16px 16px var(--red), 20px 16px var(--red), 21px 16px var(--red),
22px 16px var(--red), 23px 16px var(--red), 8px 17px var(--red), 9px 17px var(--red),
12px 17px var(--red), 13px 17px var(--red), 14px 17px var(--red), 15px 17px var(--red),
16px 17px var(--red), 17px 17px var(--red), 20px 17px var(--red), 21px 17px var(--red),
22px 17px var(--red), 23px 17px var(--red), 8px 18px var(--red), 9px 18px var(--red),
10px 18px var(--red), 11px 18px var(--red), 12px 18px var(--red), 13px 18px var(--red),
14px 18px var(--red), 15px 18px var(--red), 16px 18px var(--red), 17px 18px var(--red),
19px 18px var(--red), 20px 18px var(--red), 21px 18px var(--red), 22px 18px var(--red),
23px 18px var(--red), 9px 19px var(--red), 10px 19px var(--red), 11px 19px var(--red),
12px 19px var(--red), 13px 19px var(--red), 14px 19px var(--orange), 15px 19px var(--orange),
16px 19px var(--orange), 17px 19px var(--red), 18px 19px var(--red), 19px 19px var(--red),
20px 19px var(--red), 21px 19px var(--red), 22px 19px var(--red), 23px 19px var(--red),
9px 20px var(--red), 10px 20px var(--red), 11px 20px var(--red), 12px 20px var(--red),
13px 20px var(--orange), 14px 20px var(--yellow), 15px 20px var(--yellow), 16px 20px var(--orange),
17px 20px var(--orange), 18px 20px var(--orange), 19px 20px var(--orange), 20px 20px var(--red),
21px 20px var(--red), 22px 20px var(--red), 9px 21px var(--red), 10px 21px var(--red),
11px 21px var(--red), 12px 21px var(--red), 13px 21px var(--orange), 14px 21px var(--yellow),
15px 21px white, 16px 21px var(--yellow), 17px 21px var(--yellow), 18px 21px var(--yellow),
19px 21px var(--orange), 20px 21px var(--red), 21px 21px var(--red), 22px 21px var(--red),
10px 22px var(--red), 11px 22px var(--red), 12px 22px var(--orange), 13px 22px var(--yellow),
14px 22px white, 15px 22px white, 16px 22px white, 17px 22px var(--yellow),
18px 22px var(--orange), 19px 22px var(--red), 20px 22px var(--red), 21px 22px var(--red),
22px 22px var(--red), 10px 23px var(--red), 11px 23px var(--red), 12px 23px var(--orange),
13px 23px var(--yellow), 14px 23px var(--yellow), 15px 23px white, 16px 23px var(--yellow),
17px 23px var(--yellow), 18px 23px var(--orange), 19px 23px var(--red), 20px 23px var(--red),
21px 23px var(--red), 11px 24px var(--red), 12px 24px var(--red), 13px 24px var(--orange),
14px 24px var(--yellow), 15px 24px var(--yellow), 16px 24px var(--yellow), 17px 24px var(--orange),
18px 24px var(--red), 19px 24px var(--red), 20px 24px var(--red), 11px 25px var(--red),
12px 25px var(--red), 13px 25px var(--red), 14px 25px var(--orange), 15px 25px var(--orange),
16px 25px var(--orange), 17px 25px var(--orange), 18px 25px var(--red), 19px 25px var(--red),
12px 26px var(--red), 13px 26px var(--red), 14px 26px var(--red), 15px 26px var(--red),
16px 26px var(--red), 17px 26px var(--red), 18px 26px var(--red), 14px 27px var(--red),
15px 27px var(--red), 16px 27px var(--red), 17px 27px var(--red), 18px 27px var(--red);
--version-four: 8px 10px var(--red), 8px 11px var(--red), 7px 12px var(--red),
8px 12px var(--red), 7px 13px var(--red), 8px 13px var(--red), 13px 13px var(--red),
8px 14px var(--red), 12px 14px var(--red), 11px 15px var(--red), 12px 15px var(--red),
11px 16px var(--red), 12px 16px var(--red), 18px 16px var(--red), 9px 17px var(--red),
11px 17px var(--red), 12px 17px var(--red), 13px 17px var(--red), 18px 17px var(--red),
9px 18px var(--red), 10px 18px var(--red), 11px 18px var(--red), 12px 18px var(--red),
13px 18px var(--red), 15px 18px var(--red), 8px 19px var(--red), 9px 19px var(--red),
10px 19px var(--red), 11px 19px var(--orange), 12px 19px var(--yellow), 13px 19px var(--red),
14px 19px var(--red), 15px 19px var(--red), 18px 19px var(--red), 8px 20px var(--red),
9px 20px var(--red), 10px 20px var(--orange), 11px 20px var(--yellow), 12px 20px var(--yellow),
13px 20px var(--yellow), 14px 20px var(--red), 15px 20px var(--red), 16px 20px var(--red),
18px 20px var(--red), 19px 20px var(--red), 7px 21px var(--red), 8px 21px var(--red),
9px 21px var(--orange), 10px 21px var(--yellow), 11px 21px var(--yellow), 12px 21px white,
13px 21px var(--yellow), 14px 21px var(--yellow), 15px 21px var(--orange), 16px 21px var(--red),
17px 21px var(--red), 18px 21px var(--red), 19px 21px var(--red), 20px 21px var(--red),
7px 22px var(--red), 8px 22px var(--red), 9px 22px var(--red), 10px 22px var(--orange),
11px 22px var(--yellow), 12px 22px white, 13px 22px white, 14px 22px white,
15px 22px var(--yellow), 16px 22px var(--orange), 17px 22px var(--orange), 18px 22px var(--orange),
19px 22px var(--red), 20px 22px var(--red), 8px 23px var(--red), 9px 23px var(--red),
10px 23px var(--yellow), 11px 23px var(--yellow), 12px 23px white, 13px 23px var(--yellow),
14px 23px var(--yellow), 15px 23px var(--yellow), 16px 23px var(--orange), 17px 23px var(--orange),
18px 23px var(--red), 19px 23px var(--red), 9px 24px var(--red), 10px 24px var(--red),
11px 24px var(--orange), 12px 24px var(--orange), 13px 24px var(--orange), 14px 24px var(--orange),
15px 24px var(--orange), 16px 24px var(--red), 17px 24px var(--red), 18px 24px var(--red),
9px 25px var(--red), 10px 25px var(--red), 11px 25px var(--red), 12px 25px var(--red),
13px 25px var(--red), 14px 25px var(--red), 15px 25px var(--red), 16px 25px var(--red),
17px 25px var(--red), 10px 26px var(--red), 11px 26px var(--red), 12px 26px var(--red),
13px 26px var(--red), 14px 26px var(--red), 15px 26px var(--red);
}

  width: 1px;
  height: 1px;
  transform: scale(8) rotate(-45deg);
  animation-name: burn;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(1);
	animation-fill-mode: forwards;
  background: transparent;
  position: relative;
	z-index:9999;
	top:-200px;
	left:0px;
  @keyframes burn {
    0% {
      box-shadow: var(--version-one);
      transform: scale(8.1);
    }
    33% {
      box-shadow: var(--version-four);
      transform: scale(8.2);
    }
    58% {
      box-shadow: var(--version-three);
      transform: scale(8.1);
    }
    83% {
      box-shadow: var(--version-two);
      transform: scale(8.2);
    }
  }
`;

const FireItem = () => {
	//fires
	const sectionRef = useRef(null);
	const fireOne = useRef(null);

	//Fires
	useLayoutEffect(() => {
		const Elem = sectionRef.current;

		let t1 = gsap.timeline({
			scrollTrigger: {
				trigger: Elem,
				// start: 'top top',
				// end: 'bottom+=200 bottom',
				scrub: 1.4,
				pin: true,
			},
		});

		// .fromTo(fireOne.current, { x: 0 }, { x: 200 }, 'key1')
		t1.to(fireOne.current, {
			duration: 10,
			immediateRender: true,
		});
		t1.to(
			'.indicator',
			{
				opacity: 0,
			},
			0
		);
		t1.to(fireOne.current, {
			x: 1700,
			y: -100,
			scale: 3,
			opacity: 1,
		});
		t1.to('#intro', { x: 0, opacity: 1 }, 'key4');

		return () => {
			if (t1) t1.kill();
		};
	}, []);

	return (
		<>
			<Section ref={sectionRef}>
				<FireContainer ref={fireOne}>
					<Fire />
				</FireContainer>
			</Section>
		</>
	);
};

export default FireItem;
