import project1 from './images/Todo-laptop.png';
import project2 from './images/Job-listings.png';
import project3 from './images/Pagination.png';
import project4 from './images/Infinite-scroll.png';
import project5 from './images/Quiz-App.png';
import project6 from './images/Cart-redux.png';

import reactLogo from './images/react-original.svg';
import reduxLogo from './images/redux-original.svg';
import styledLogo from './images/styled-components.svg';
import jsLogo from './images/javascript-original.svg';
import cssLogo from './images/css3-plain-wordmark.svg';

const projects = [
  {
    id: 1,
    title: 'Todo | frontendmentor.io',
    image: project1,
    description:
      'The classic todo app with a few twists! This app includes a dark/light theme && styles toggle. Built with React, Context API and Styled Components.',
    languages: [reactLogo, reduxLogo, styledLogo],
    tools: [],
    links: [
      'https://todo-frontendmentor-app.netlify.app/',
      'https://github.com/vovaushenko/todo-frontend-mentor-challenge',
      'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
    ],
  },
  {
    id: 2,
    title: 'Job Listings | frontendmentor.io',
    image: project2,
    description:
      'In this challenge, I was using React & Redux to built a simple Job listing app, that transforms an input JSON into responsive landing with the filtering functionality.',
    languages: [reactLogo, reduxLogo, styledLogo],
    tools: [],
    links: [
      'https://job-listings-redux.netlify.app',
      'https://github.com/vovaushenko/job-listings-master-frontend-challenge',
      'https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt',
    ],
  },
  {
    id: 3,
    title: 'Dynamic Client-Side Pagination',
    image: project3,
    description:
      'In this challenge, I created a client-side, on-the-fly pagination with the use of React. This app fetches data from the GitHub REST API. User can dynamically change pagination parameters.',
    languages: [reactLogo, jsLogo, cssLogo],
    tools: [],
    links: [
      'https://dynamic-pagination-react.netlify.app/',
      'https://dynamic-pagination-react.netlify.app/',
    ],
  },
  {
    id: 4,
    title: 'Infinite Scroll Photo App',
    image: project4,
    description:
      'In this challenge, I created an infinite scroll photo App with the use of React and Unsplash.com. User can select any topic for search and the app will rended thousands of photos.',
    languages: [reactLogo, jsLogo, cssLogo],
    tools: [],
    links: [
      'https://infinite-scroll-app-react.netlify.app/',
      'https://infinite-scroll-app-react.netlify.app/',
    ],
  },
  {
    id: 5,
    title: 'Quiz App',
    image: project5,
    description:
      'Test your knowledge in certain areas with this React App. The idea was pretty simple - an app that fetches a list of question with different complexity levels.',
    languages: [reactLogo, jsLogo, cssLogo],
    tools: [],
    links: [
      'https://test-your-knowledge-react.netlify.app/',
      'https://test-your-knowledge-react.netlify.app/',
    ],
  },
  {
    id: 6,
    title: 'Redux Cart',
    image: project6,
    description:
      'I built a basic cart component with the logic that is driven and controlled by Redux.',
    languages: [reactLogo, reduxLogo, jsLogo, cssLogo],
    tools: [],
    links: [
      'https://redux-interactive-cart.netlify.app/',
      'https://github.com/vovaushenko/redux-cart',
    ],
  },
];

export default projects;
