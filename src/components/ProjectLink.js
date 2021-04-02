import styled from 'styled-components';

const StyledProjectLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.25em 1em;
  outline: none;
  border-radius: 2.5rem;
  border-color: transparent;
  text-transform: capitalize;
  cursor: pointer;
  width: 6rem;
  margin: 0 1rem;
  color: #fafbfb;
`;

const ProjectLink = ({ text, address }) => {
  return (
    <StyledProjectLink href={address} target="_blank">
      {text}
    </StyledProjectLink>
  );
};

export default ProjectLink;
