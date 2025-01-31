import { createGlobalStyle } from 'styled-components';
import ManropeBolt from '../../assets/fonts/Manrope-Bold.ttf';
import ManropeSemiBold from '../../assets/fonts/Manrope-SemiBold.ttf';
import ManropeRegular from '../../assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from '../../assets/fonts/Manrope-Medium.ttf';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  /* dark theme */
  &[data-theme='dark'] {
    --background-color: #0A0A11;
    --button-color: #F3F3F3;
    --button-hover-color: #161F37;
  }

  /* light theme */
  &[data-theme='light'] {
    --background-color: #F3F3F3;
    --button-color: #161F37;
    --button-hover-color: #F3F3F3;
  }
}
@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Bold'), url(${ManropeBolt}) format('truetype');
  font-weight: bold;
  font-style: normal;
}


@font-face {
  font-family: 'Manrope';
  src: local("Manrope-SemiBold"), url(${ManropeSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Regular'), url(${ManropeRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Medium'), url(${ManropeMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --font-main: 'Manrope', sans-serif;
  --color-main-darktheme: #F3F3F3;
  --bg-color-main-darktheme: #0A0A11;
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;
  font-family: var(--font-main);
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: var(--color-main-darktheme);
  width: 100%;
  height: 100vh;
  /* background-color: var(--background-color); */
  background-color: var(--bg-color-main-darktheme);
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color: inherit;
}

.error-message {
  font-size: 14px;
  color: red;
}
`;
