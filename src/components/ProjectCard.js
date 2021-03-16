import styled from 'styled-components';
import ProjectLink from './ProjectLink';
const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  text-align: center;
  padding: 2rem;
  background: rgba(113, 92, 218, 0.14);
  box-shadow: 0 18px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;
const StyledIconsWrapper = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 0.5rem;

  img {
    height: 2rem;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ProjectCard = ({ title, image, description, languages }) => {
  return (
    <StyledCard>
      <img src={image} alt="project screenshot" />
      <h2>{title}</h2>
      <StyledIconsWrapper>
        {languages.map((technology, id) => (
          <img src={technology} alt={title} key={id} />
        ))}
      </StyledIconsWrapper>
      <p>{description}</p>
      <StyledBtnWrapper>
        <ProjectLink text="Github" address="https://grid.malven.co/" />
        <ProjectLink text="Live" address="https://grid.malven.co/" />
      </StyledBtnWrapper>
    </StyledCard>
  );
};

export default ProjectCard;
