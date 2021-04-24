import styled from 'styled-components';
import projects from '../data';
import ProjectCard from './ProjectCard';

const StyledContainer = styled.main`
  width: 90vw;
  max-width: 1170px;
  margin: 2rem auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
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
