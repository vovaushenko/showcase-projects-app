import styled from 'styled-components';
const StyledCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  text-align: center;
  border-radius: 6px;
  padding: 1rem;
  img {
    width: 90%;
  }
  h2 {
    margin-top: 1rem;
  }
`;

const ProjectCard = ({ title, image, description, languages, tools }) => {
  return (
    <StyledCard>
      <img src={image} alt="project screenshot" />
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledCard>
  );
};

export default ProjectCard;
