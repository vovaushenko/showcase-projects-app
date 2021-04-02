import styled from 'styled-components';
import projects from '../data';
import ProjectCard from './ProjectCard';

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 1rem;
  align-items: center;
  justify-items: center;
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
