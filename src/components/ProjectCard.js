import styled from 'styled-components';
import ProjectLink from './ProjectLink';
const StyledCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  text-align: center;
  padding: 2rem;

  img {
    width: 90%;
  }
  h2 {
    margin-top: 1rem;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ProjectCard = ({ title, image, description, languages, tools }) => {
  return (
    <StyledCard>
      <img src={image} alt="project screenshot" />
      <h2>{title}</h2>
      <p>{description}</p>
      <StyledBtnWrapper>
        <ProjectLink text="Github" address="https://grid.malven.co/" />
        <ProjectLink text="Live" address="https://grid.malven.co/" />
      </StyledBtnWrapper>
    </StyledCard>
  );
};

export default ProjectCard;
