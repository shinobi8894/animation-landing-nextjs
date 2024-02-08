import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --font-1:4rem;
        --font-2:3.5rem;
        --font-3:3rem;
        --font-4:2.5rem;
        --font-5:2rem;
        --font-6:1.5rem;
        --font-7:1rem;

        --content-width:90rem;
    }
    html {
        box-sizing: border-box;
        background-color:black;
        overflow:hidden;
      }
      *, *::before, *::after {
        box-sizing: inherit;
      }
      h1, h2, h3, h4, h5, h6 {
        margin:0;
        font-size:inherit;
        font-weight:inherit;
      }
      p {
        margin:0;
      }
      a {
        text-decoration:none; 
        color:inherit; 
        cursor:pointer;
      }
      button {
        background-color:transparent;
        color:inherit;
        border-width:0;
        padding:0;
        cursor:pointer;
      }
      input::-moz-focus-inner { 
        border:0;
        padding:0;
        margin:0;
      }
      input, textarea {
        outline: 0;
      }
      ul, ol, dd {
        margin:0;
        padding:0;
        list-style:none;
      }
      cite {
        font-style:normal;
      }
      fieldset{
        border-width:0;
        padding:0;
        margin:0;
      }
      figure{
        margin:0;
      }
      body {
        margin:0;
      }
      .swiper {
        width: 100%;
        height: 100%;
      }
`

export const ContentWrapper = styled.div`
      max-width:var(--content-width);
      width:100vw;
      padding:1rem;
`
export default GlobalStyle;