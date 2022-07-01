const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ldwigantoro.github.io/',
  title: 'LD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Leonardo Dwigantoro',
  role: 'Computer Science Student',
  description:
    'Fourth-year computer science student, a future software engineer who loves to solve problems in technologize ways. My passion for technology brought me to Universitas Padjadjaran, where I am studying Undergraduate in Computer Science. ',
  resume: 'https://drive.google.com/file/d/1X52XGGUbq6QhdD_VdWPUJjkL9bxwvhKZ/view',
  social: {
    linkedin: 'https://linkedin.com/in/leonardo-dwigantoro',
    github: 'https://github.com/ldwigantoro',
    twitter: 'https://twitter.com/dwigantoro_'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Media Social PadjadjaranHub',
    description:
      'Social Media to connect unpad students. Users can create account, update status and make friends with others.',
    stack: ['JavaScript', 'Express', 'Node', 'MongoDB'],
    sourceCode: 'https://github.com/mdiva31/PadjadjaranHub',
    livePreview: 'http://padjadjaran-hub.herokuapp.com/',
  },
  {
    name: 'Penguins Prediction Web App',
    description:
      'End-to-end machine learning web app to predicts the species of penguins using random forest algorithms.',
    stack: ['Python', 'Pandas', 'Streamlit'],
    sourceCode: 'https://github.com/LDwigantoro/Penguins-Classification',
    livePreview: 'https://klasifikasi-pinguin.herokuapp.com/',
  },
  {
    name: 'Fifteen-Puzzle Mini Game',
    description:
      'Mini game using Java to arrange a shuffled set of 15 numbered tiles in ascending order. Implemented OOP practices.',
    stack: ['Java', 'OOP', 'Swing'],
    sourceCode: 'https://github.com/ldwigantoro/FifteenPuzzle/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'SQL',
  'Node',
  'Express',
  'MongoDB',
  'Git',
  'UIPath',
  'TensorFlow',
  'REFramework',
  'OOP',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'leonardo.dwigantoro@gmail.com',
}

export { header, about, projects, skills, contact }
