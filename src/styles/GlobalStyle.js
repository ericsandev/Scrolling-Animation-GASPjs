import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
    ${'' /* outline: 1px solid red !important; */}
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

.h2 {
    font-size: 40px;
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

:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --yellowLight: #f8f68f;
  --blue: #90d0e9;
  --blueLight: #a2ffeb ;
  --blueDark: #003636;
  --green: #12DDC3;
  --red: #dd2f2f;
  --orange: #dd832f;
  --yellow: #ffe137;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: 'Montserrat', sans-serif;
  --fontR: 'Montserrat', sans-serif;
  
  // gradient
  --gradient: #12DDC3 20%, #3A85B5 39%, #003636 76%, #12DDC3 100%;
  --gradientY: #FC0 20%, #fff671 39%, #12DDC3 76%, #FC0 100%;
}
.indicator {
  text-align: center;
  position: fixed;
  top: 60%;
  left: 25%;
  transform: translate3d(-50%, 0, 0);
  font-size: 3rem;

  span {
    display: block;

    &:nth-child(2) {
      animation: arrowMove 600ms infinite alternate;
    }
  }
}
@keyframes arrowMove {
  to {
    transform: translate3d(0, 0.5rem, 0);
  }
}
`;
