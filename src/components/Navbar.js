import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  max-width: 1100px;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Navbar = ({ themeToggler }) => {
  return (
    <NavbarContainer>
      <h3>Front-end Challenges</h3>
      <button onClick={() => themeToggler()}>click</button>
    </NavbarContainer>
  );
};

export default Navbar;
