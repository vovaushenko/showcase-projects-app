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
  border: 1px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  :hover {
    background: rgba(113, 92, 218, 0.2);
  }
`;
const StyledIconsWrapper = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  justify-content: flex-end;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    display: inline-block;
    height: 2rem;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const ProjectCard = ({ title, image, description, languages, links }) => {
  const [liveUrl, githubUrl, frontendMentorUrl] = links;

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
        <ProjectLink text="Github" address={githubUrl} />
        <ProjectLink text="Live" address={liveUrl} />
        {frontendMentorUrl && <ProjectLink text="Task" address={frontendMentorUrl} />}
      </StyledBtnWrapper>
    </StyledCard>
  );
};

export default ProjectCard;
