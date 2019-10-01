const Resume = {
  header: {
    name: 'Your Name',
    email: 'email@domain.com',
    phone: '123-456-7890',
    github: 'https://github.com/xxxxxxx',
    linkedin: 'https://linkedin.com/in/xxxxxx',
    address: '123 Main Street',
    website: 'https://website.com',
    city: 'City',
    state: 'CA',
    zip: '00000',
    country: 'USA',
  },
  experience: [
    {
      company: 'Experience 1',
      city: 'City',
      state: 'CA',
      position: 'Position 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
    },
    {
      company: 'Experience 2',
      city: 'City',
      state: 'CA',
      position: 'Position 2',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
    },
    {
      company: 'Experience 3',
      city: 'City',
      state: 'CA',
      position: 'Position 3',
      dateFrom: '',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
    },
  ],
  education: [
    {
      site: 'School 1',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      studyDegree: 'Subject, Degree/Certificate',
    },
    {
      site: 'School 2',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      studyDegree: 'Subject, Degree/Certificate',
    },
  ],
  certification: [
    {
      issuedBy: 'Issuer 1/Cert Name',
      id: '#12345',
      dateFrom: 'XX/XXXX',
      dateTo: '',
    },
    {
      issuedBy: 'Issuer 2/Cert Name',
      id: '#12345',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
    },
    {
      issuedBy: 'Issuer 3/Cert Name',
      id: '#12345',
      dateFrom: '',
      dateTo: '',
    },
  ],
  technicalSkills: [
    {
      category: 'Development Languages',
      keywords: [{ name: 'JavaScript', level: 3 }, { name: 'HTML', level: 4 }, { name: 'CSS', level: 4 }],
    },
    {
      category: 'Technologies',
      keywords: [
        { name: 'MongoDB', level: 2 },
        { name: 'Express', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 4 },
        { name: 'Mocha', level: 4 },
        { name: 'Passport', level: 4 },
        { name: 'JWT', level: 4 },
        { name: 'Chai', level: 4 },
        { name: 'Redux', level: 4 },
        { name: 'Git', level: 4 },
        { name: 'GitHub', level: 4 },
      ],
    },
  ],
  projects: [
    {
      name: 'Project 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      link: 'http://website.com',
      teamBrief: '1-person project',
      details: ['Detail 1', 'Detail 2', 'http://projectLink.com'],
    },
    {
      name: 'Project 2',
      link: 'http://website.com',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      teamBrief: '1-person project',
      details: ['Detail 1', 'Detail 2', 'https://google.com'],
    },
  ],
};

export default Resume;
