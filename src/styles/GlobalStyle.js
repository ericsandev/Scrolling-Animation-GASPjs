import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


:root{
  // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
--fontBig: 112px; 
--fontxxxl: 88px; 
--fontxxl: 55px; 
--fontxl: 44px; 
--fontlg: 31px; 
--fontmd: 22px; 
--fontsm: 18px; 
--fontxs: 16px;
--fontxxs: 12px;

// Colors
--primary: #25316D;
--secondary: #5F6F94;
--grey: #E8E2E2;
--dark: #000000;
--offWhite: #F5F5F5;
--white: #ffffff;
--yellowLight: #FEF5AC;
--blue: #97D2EC;
--blueLight: #a2ffeb ;
--blueDark: #003636;
--green: #12DDC3;
--red: #FF1E1E;
--orange: #dd832f;
--yellow: #FFFF00;
--blueRgba:"0, 113, 227";

--gray-100: #f4f4f5;
--gray-200: #e9ecef;
--gray-300: #dee2e6;
--gray-400: #ced4da;
--gray-500: #adb5bd;
--gray-600: #666666;
--gray-700: #333333;
--gray-800: #222222; 
--gray-900: #111111;

//fonts
--fontL: 'Montserrat', sans-serif;
--fontR: 'Montserrat', sans-serif;

// gradient
--gradient: #12DDC3 20%, #3A85B5 39%, #003636 76%, #12DDC3 100%;
--gradientY: var(--white) 20%, var(--blueLight) 39%, var(--grey) 76%, var(--blueLight) 100%;
}


*,*::before,*::after{
    margin: 0;
    padding: 0;
    ${'' /* outline: 1px solid red !important; */}
}
body {
background: linear-gradient(to bottom,
  var(--dark),
  var(--gray-900),
 var(--orange),
 var(--red),
 var(--gray-800),
 var(--gray-900),
  black);
// background-attachment: fixed;
// background-repeat: no-repeat;
// background-position: center;
// background-size:cover;
// 	background-image: url(https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg);
max-width: 100vw;
min-height: 100vh;
overflow-x: hidden;
color: white;
position: relative;
margin: 0;

// &::before {
//   position: fixed;
//   content: '';
//   pointer-events: none;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
// 	background-color: rgba(0,0,0,0.75);
// }

  @media (min-width: 40em) {
    font-size: 2rem;
  }
}


h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

.big {
    font-size: var(--textBig);
  }
  
  .blueLight {
    color: var(--blueLight);
    left:-10px;
  }

  .red {
    color: var(--red);
    left:-10px;
  }
  .orange {
    color: var(--orange);
    left:-20px;
  }
  .yellow {
    color: var(--yellow);
    left:-30px;
  }
  .green {
    color: var(--green)
  }
  .blue {
    color: var(--blue);
    left:-20px;
  }
  .blueDark {
        color: var(--blueDark);
    left:-30px;
  }

  .font-sm{
    font-size: var(--fontsm)
  }

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Sassy+Frass&display=swap');


body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
}


section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.robot-wrapper {
	--mask: linear-gradient(180deg, rgba(0, 0, 0, 1.0), transparent);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;

	pointer-events: none;
	-webkit-mask-image: var(--mask);

	z-index: 2;
}

.robot {
	--bodyW: 2rem;
	--o: 0.95;
	--l: 100%;
	--c: hsla(250deg, 150%, var(--l), var(--o, 0.6));
	--size: 460px;
	position: relative;
	width: var(--size);
	height: var(--size);
transform: rotate(-90deg);
	@media (min-width: 1000px) {
		--size: 20rem;
		--bodyW: 1rem;
	}

}



.robot__skeleton {
  border-radius: 40px;
	--clip: polygon(0 var(--bodyW), 45% 0, 55% 0, 100% var(--bodyW), 50% 100%);
	position: absolute;
	width: 100%;
	height: 100%;
	background: 
		repeating-linear-gradient(0deg, var(--c), var(--c) 0.1rem, transparent 0, transparent 0.5rem),
		linear-gradient(var(--c) var(--bodyW), transparent var(--bodyW)), 
		linear-gradient(90deg, transparent calc((var(--bodyW) / 2) - 0.1rem), var(--c) 0, var(--c) calc((var(--bodyW) / 2) + 0.1rem), transparent 0);
	top: calc(var(--bodyW) / 4);
	left: calc(var(--bodyW) * 0.75);
	width: var(--bodyW);
	height: calc(var(--bodyW) * 4);
	-webkit-clip-path: var(--clip);
	clip-path: var(--clip);
	opacity: 0;
	transform: translate3d(0, 0, calc(var(--bodyW) / -2)) rotate(90deg);
	transform-origin: center center;
}

.robot__inner {
	--a: 9.5deg;
	width: calc(var(--bodyW) * 1.5);
	height: var(--size);
	transform-style: preserve-3d;
	transform: rotate(90deg);
}

.robot__body {
	--l: 75%;
	--c: hsla(250deg, 50%, var(--l), var(--o, 0.6));
	position: absolute;
	top: var(--bodyW);
	left: 0;
	width: var(--bodyW);
	height: calc(3 * var(--bodyW));
	background: var(--c);
	clip-path: polygon(0 0, 100% 0, 50% 100%);
	transform: translateZ(calc(var(--bodyW) / -2)) rotateX(var(--a));
	transform-origin: center top;
	
	&:nth-child(2) {
		--i: 2;
		--l: 75%;
		transform: translateZ(calc(var(--bodyW) / 2)) rotateX(calc(var(--a) * -1));
	}
	
	&:nth-child(3) {
		--i: 3;
		--l: 95%;
		transform: rotateY(90deg) translate3d(calc(var(--bodyW) / -2), 0, 0) rotateX(var(--a));
		transform-origin: left top;
	}
	
	&:nth-child(4) {
		--i: 4;
		--l: 50%;
		transform: rotateY(90deg) translate3d(calc(var(--bodyW) / 2), 0, 0) rotateX(calc(var(--a) * -1));
		transform-origin: right top;
	}
}

.robot__head {
	--a: 23.5deg;
	--l: 85%;
	--c: hsla(250deg, 50%, var(--l), var(--o, 0.6));
	position: absolute;
	top: 0;
	left: 0;
	width: var(--bodyW);
	height: var(--bodyW);
	background: var(--c);
	clip-path: polygon(40% 0, 60% 0, 100% 100%, 0 100%);
	transform: scale(calc(var(--bodyW) / 2)) rotateX(var(--a));
	transform-origin: center bottom;
	
	&--2 {
		--i: 2;
		--l: 80%;
	}
	
	&--3 {
		--i: 3;
		--l: 30%;
		transform-origin: left bottom;
	}
	
	&--4 {
		--l: 55%;
		transform: rotateY(90deg) translate3d(calc(var(--bodyW) / 2), 0, 0) rotateX(var(--a));
		transform-origin: right bottom;
	}
}

.robot__tail-main {
	--o: 0.9;
	--l: 90%;
	--c: hsla(250deg, 50%, var(--l), var(--o, 0.6));
	width: var(--bodyW);
	height: var(--bodyW);
	background-color: var(--c);
	position: absolute;
	left: 0;
	bottom: var(--bodyW);
	clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.robot__tail-fork {
	--o: 0.9;
	--l: 95%;
	--c: hsla(250deg, 50%, var(--l), var(--o, 0.6));
	width: var(--bodyW);
	height: var(--bodyW);
	background-color: var(--c);
	position: absolute;
	left: 0;
	bottom: 0;
	clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 70% 70%, 50% 30%, 30% 70%, 10% 100%, 0 70%);
	transform-origin: top center;
	transform: rotateX(-45deg);
	animation: tail 1000ms infinite alternate;
}

.robot__fin {
	width: calc(var(--bodyW) / 8 * 3);
	height: var(--bodyW);
	background-color: var(--c);
	position: absolute;
	top: calc(var(--bodyW) * 1.5);
	left: calc(var(--bodyW) / 8 * 3);
	clip-path: polygon(50% 0, 100% 30%, 100% 60%, 50% 100%, 0 60%, 0 30%);
	transform-origin: top center;
	transform: rotate(calc(var(--bodyW) / 2)) rotateY(0deg) rotateX(5deg) rotate(10deg);
	animation: fin 1500ms infinite alternate linear;
	
	&--2 {
		transform: rotate(calc(var(--bodyW) / -2)) rotateY(0deg) rotateX(-5deg) rotate(10deg);
		animation: fin2 1500ms infinite alternate linear;
	}
}

@keyframes tail {
	to {
		transform: rotateX(45deg);
	}
}

@keyframes fin {
	100% {
		transform: translateZ(calc(var(--bodyW) / 2)) rotateY(10deg) rotateX(20deg) rotate(-10deg);
	}
}

@keyframes fin2 {
	100% {
		transform: translateZ(calc(var(--bodyW) / -2)) rotateY(-10deg) rotateX(-20deg) rotate(-10deg);
	}
}

/* Lights */
.lights {
	position: fixed;
	pointer-events: none;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
}

.lights__group {
	position: relative;
	height: 100%;
}

.lights__light {
	--size: 0.35rem;
	width: var(--size);
	height: var(--size);
	position: absolute;
	background: rgba(255, 255, 255, 1);
	border-radius: 100%;
	top: 10%;
	left: 25%;
	filter: blur(0.1rem);
	animation: blink 2500ms var(--d, 0ms) infinite alternate;
	
	&:nth-child(2) {
		--d: 200ms;
		top: 40%;
		left: 12%;
	}
	
	&:nth-child(3) {
		--d: 350ms;
		top: 60%;
		left: 18%;
	}
	
	&:nth-child(4) {
		--d: 600ms;
		top: 25%;
		left: 66%;
	}
	
	&:nth-child(5) {
		--d: 1210ms;
		top: 43%;
		left: 55%;
	}
	
	&:nth-child(6) {
		--d: 420ms;
		top: 90%;
		left: 37%;
	}
	
	&:nth-child(7) {
		--d: 1100ms;
		top: 82%;
		left: 91%;
	}
	
	&:nth-child(8) {
		--d: 1560ms;
		top: 67%;
		left: 81%;
	}
}

@keyframes blink {
	to {
		opacity: 0;
	}
}


.content {
	position: relative;
	z-index: 1;
	padding-bottom: 100vh;
}

section {
	height: 100vh;
	width: 100%;
	margin-top: 100vh;
	
	&:nth-child(4n),
	&:nth-child(4n - 1) {
		--col: 3;
	}
}

.section__content {
	width: 100%;
	position: fixed;
	top: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	
	@media (min-width: 50rem) {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 25rem));
		gap: 2rem;
		padding: 3rem;
		
		> * {
			grid-column: var(--col, 1);
			opacity: 0;
		}
	}
}

.bubbles {
	position: fixed;
	top: 0;
	left: 5rem;
	// transform-style: preserve-3d;
	transform-origin: center;
	transform: translate3d(10rem, 5rem, 0) rotateX(20deg) rotateY(0deg)
}

.bubbles__inner {
	width: 160px;
	height: 160px;
}

.bubbles__bubble {
	--c: rgba(42, 26, 51, 0.4);
	--size: 900px;
	position: absolute;
	width: var(--size);
	height: var(--size);
	border-radius: 50%;
	background: radial-gradient(transparent 30%, var(--c, white)), radial-gradient(circle at 100% 0%, transparent 30%, var(--c, white));
	transform-origin: center;
	transform: scale(0);
	opacity: 0;
	
	&:nth-child(2) {
		--size: 100px;
		top: 3rem;
		left: -22rem;
	}
	
	&:nth-child(3) {
		--size: 1.2rem;
		top: 6rem;
		left: 0;
	}
}


@keyframes arrowMove {
	to {
		transform: translate3d(0, 0.5rem, 0);
	}
}

@keyframes figure {
  0% {
      border-radius: 10%;
  }

  30% {
    border-radius-top: 11%;
}

  100% {
      border-radius: 0;
  }
}

.circle {
  margin: 40vh auto;
  width: 8rem;
  height: 18rem;
transform rotate(-45deg);
  background-color: var(--white);
  animation: figure 2s ease-in-out alternate infinite;
}


.cube {
  animation: rotate 7000ms linear infinite;
  bottom: 0;
  height: 100px;
  left: 0;
  margin: auto;
  position: absolute;
  transform-style: preserve-3d;
  right: 0;
  top: 0;
  width: 100px;
}

@keyframes rotate {
  100% {
    transform: rotateY(360deg) rotateX(720deg) rotateZ(1080deg);
  }
}

.face {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.front {
  background: var(--green);
  transform: translateZ(50px);
}

.back {
  background: var(--blueLight);
  transform: translateZ(-50px);
}

.left {
  background: var(--blueLight);
  transform: translateX(-50px) rotateY(90deg);
}

.right {
  background: var(--blueDark);
  transform: translateX(50px) rotateY(90deg);
}

.top {
  background: var(--blueLight);
  transform: translateY(-50px) rotateX(90deg);
}

.bottom {
  background:  var(--blueDark);
  transform: translateY(50px) rotateX(90deg);
}




/* SVG Styles */
#robot {
  animation: fly-in $fly-in-time ease-out;
  max-height: 580px;
  height:100%;
  width: 100%;
}

.arm,
.leg {
  animation: dangle 3s $hover-bezier 3s infinite;
  transform-origin: center;
}

.head {
  animation: attach-head $fly-in-time linear;
}

.flame {
  animation: flicker 0.35s linear infinite;
  transform-origin: 50% 50%;
}

.lean {
  animation: lean $fly-in-time linear;
  transform-origin: 50% 0%;
}

.levitate {
  animation: levitate 3s $hover-bezier infinite;
  transform-origin: 50% 50%;
}

.smoke {
  animation: smoke 0.25s linear infinite;
  transform-origin: 50% 50%;
}

.smoke-group {
  animation: track-levitate 3s $hover-bezier infinite;
  animation-delay: 0.25s;
}

// Animation delay classes
@for $i from 2 through 10 {
  .delay-#{$i} {animation-delay: 0.03s * $i;}
}

// Keyframe animations
/* 
  Flicker courtesy of:
  https://codepen.io/ghen/pen/pvwOwM
*/
@keyframes flicker {
  0% {transform: rotate(-1deg);}
  25% {transform: rotate(1deg) scaleY(1.15);}
  50%, 100% {transform: rotate(1deg);}
  75% {transform: rotate(-2deg) scaleY(0.5);}
  
}

@keyframes smoke {
  from {transform: scale(0.95);}
  to {transform: scale(1.15);}
}

/*
  Rotating hover courtesy of:
  http://lea.verou.me/2012/02/moving-an-element-along-a-circle/ 
*/
@keyframes levitate {
  from {transform: rotate(0deg) translate(-15px) rotate(0deg);}
	to {transform: rotate(360deg) translate(-15px) rotate(-360deg);}
}

@keyframes track-levitate {
  0%, 100% {transform: translateX(-20px);}
  50% {transform: translateX(0);}
}

@keyframes dangle {
  0%, 100% {transform: rotate(0deg);}
  33% {transform: rotate(10deg);}
  66% {transform: rotate(-10deg);}
}

@keyframes lean {
  0%, 100% {transform: rotate(0deg) translateX(0px);}
  20% {transform: rotate(-30deg) translateX(-130px);}
  80% {transform: rotate(-30deg) translateX(-130px);}
}

@keyframes attach-head {
  0%, 100% {transform: translate(0px 0px);}
  20% {transform: translate(-130px, 60px);}
  80% {transform: translate(-130px, 60px);}
}

@keyframes fly-in {
  0% {transform: translateX(2000px);}
  100% {transform: translateX(0px);}
}



.fireBit{
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

  width: 1px;
  height: 1px;
  transform: scale(8) rotate(-45deg);
  animation-name: burn;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(1);
	animation-fill-mode: forwards;
  background: transparent;


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
}


}


`;
