import axios from 'axios'
import { API } from '../constants/api'
import { PersonalData } from '../types/PersonalData'

const api = axios.create({
  baseURL: API.URL,
  timeout: 3000,
  headers: {
    apiKey: API.KEY,
  },
})

export const getPersonalData = async (): Promise<PersonalData> => {
  // const response = await api.get<PersonalData>('/personal_data')
  // return response.data

  return {
    _id: '63948c0568554d7f98d3c03c',
    about:
      'As an energetic software engineer, I devote my full potential to learning new technologies and finding solutions to real-world problems. At the university, I learned to work as a team and interact diplomatically with people leading to quality work.',
    experiences: [
      {
        title: 'Full-stack Developer',
        subtitle: 'Freelance',
        intervalYear: '2022',
        intervalMonth: 'Jan - Feb',
        duties: [
          {
            description:
              'Designed and implemented a Patient Record and Stock Management System for a Clinic using Next.js for both the Frontend and Backend with Prisma and MongoDB',
            highlight: '(Typescript, Next.js, Prisma, MongoDB)',
          },
        ],
      },
      {
        title: 'Software Engineer in Test',
        subtitle: 'Intern - LINE MAN Wongnai',
        intervalYear: '2021',
        intervalMonth: 'Jun - Jul',
        duties: [
          { description: 'Designed test cases for new features' },
          {
            description:
              'Performed manual tests and regression tests for the website and mobile applications',
          },
          {
            description: 'Created programs for automating tests',
            highlight: '(Cypress, Jest)',
          },
        ],
      },
      {
        title: 'Teaching Assistant for Calculus and English',
        subtitle: 'Part Time - Faculty of ICT, Mahidol University',
        intervalYear: '2019',
        intervalMonth: 'Jul',
        duties: [
          { description: "Prepared answers to the student's exercises " },
          {
            description:
              'Assisted the instructors in explaining the lessons and exercises to students',
          },
          { description: 'Gave advice and tips to students in the subjects' },
        ],
      },
    ],
    education: [
      {
        title: 'Mahidol University, Thailand',
        intervalYear: '2018 - 2022',
        degree:
          'B.Sc. in Information and Communication Technology (Computer Science)',
        grade: 'CGPA: 3.97 / 4.00',
        achievements: [
          {
            heading: '',
            description:
              'A nearly straight-A student who excelled at many courses including Software Design and Development, Web Development, OOP, Algorithms, Data Science, and more',
            highlight: '',
          },
          {
            heading: 'Senior Project',
            description:
              'Developing eSit (Ergonomic Sitting Posture Monitoring System using Computer Vision Techniques) using React for UI Client, Express for API Server, & FastAPI for Machine Learning Server',
            highlight:
              '(Typescript, React, Node.js, FastAPI, Firebase, Docker)',
          },
        ],
      },
      {
        title: 'Bak Touk High School',
        intervalYear: '2014 - 2017',
        degree: 'Math and Science',
        grade: 'Overall Grade: A',
        achievements: [
          {
            description:
              'Cambodian Secondary Education Exam for Senior High School 2016-2017',
            highlight: '(Classification of Overall Score: 99.714)',
          },
        ],
      },
    ],
  }
}
