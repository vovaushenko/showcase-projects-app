import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background: ${({ theme }) => theme.body};
  
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight:400;
    transition: all 0.1s ease-in-out;
  }

  ul {
  list-style-type: none;
}

  button {
    display: inline-block;
    font-size:1rem;
    font-family:inherit;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};

    padding:0.125em 0.75em;
    outline:none;
    border-radius:2.5rem;
    border-color: transparent;
    text-transform: capitalize;
    cursor: pointer;

  }

  a {
    text-decoration:none;
    color:${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  p{
    margin-bottom:0.75rem;
  }
  h1,h2,h3,h4,h5 {
    margin-bottom:0.75rem;
    line-height: 1.25;
    
  }

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}



  @media (max-width: 500px) {
    body {
    font-size: 0.75rem;
    font-weight:400;
  }
  }
  `;
