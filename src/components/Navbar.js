import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const StyledNavbarContainer = styled.nav`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  max-width: 1100px;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h3 {
    margin-bottom: 0;
  }
`;

const Navbar = ({ themeToggler }) => {
  return (
    <StyledNavbarContainer>
      <h3>Front-end Challenges</h3>
      <ThemeToggler themeToggler={themeToggler} />
    </StyledNavbarContainer>
  );
};

export default Navbar;
