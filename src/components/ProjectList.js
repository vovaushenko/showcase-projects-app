import styled from 'styled-components';
import projects from '../data';
import ProjectCard from './ProjectCard';

const StyledContainer = styled.main`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectList = () => {
  return (
    <StyledContainer>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </StyledContainer>
  );
};

export default ProjectList;
