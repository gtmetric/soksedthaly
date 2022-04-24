import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { EducationItem } from '../components/about/EducationItem'
import { ExperienceItem } from '../components/about/ExperienceItem'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

const About: NextPage = () => {
  return (
    <main className="text-center pt-16 px-8 sm:px-10 max-w-4xl mx-auto xl:max-w-5xl">
      {/* About Section */}
      <div>
        <h1 className="text-3xl font-bold py-10 md:text-4xl md:py-12">About</h1>
        <p className="text-left text-lg md:text-xl md:leading-9">
          As an energetic software engineer, I devote my full potential to
          learning new technologies and finding solutions to real-world
          problems. At the university, I learned to work as a team and interact
          diplomatically with people leading to quality work.
        </p>
      </div>

      {/* Experience Section */}
      <div>
        <h1 className="text-3xl font-bold py-10 md:text-4xl md:py-12">Experience</h1>
        <ExperienceItem
          year="2022"
          month="Jan - Feb"
          position="Full-stack Developer"
          employer="Freelance"
        >
          <ul className="list-disc">
            <li>
              <p>
                Designed and implemented a Patient Record and Stock Management
                System for a Clinic using Next.js for both the Frontend and
                Backend with Prisma and MongoDB
              </p>
              <p className="font-semibold pt-2">
                (Typescript, Next.js, Prisma, MongoDB)
              </p>
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem
          year="2021"
          month="Jun - Jul"
          position="Software Engineer in Test"
          employer="Intern - LINE MAN Wongnai"
        >
          <ul className="list-disc">
            <li>
              <p>Designed test cases for new features</p>
            </li>
            <li>
              <p>
                Performed manual tests and regression tests for the website and
                mobile applications
              </p>
            </li>
            <li>
              <p>
                Created programs for automating tests{' '}
                <span className="font-semibold">(Cypress, Jest)</span>
              </p>
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem
          year="2019"
          month="Jul"
          position="Teaching Assistant for Calculus and English"
          employer="Part Time - Faculty of ICT, Mahidol University"
        >
          <ul className="list-disc">
            <li>
              <p>Prepared answers to the student&apos;s exercises</p>
            </li>
            <li>
              <p>
                Assisted the instructors in explaining the lessons and exercises
                to students
              </p>
            </li>
            <li>
              <p>Gave advice and tips to students in the subjects</p>
            </li>
          </ul>
        </ExperienceItem>
      </div>

      {/* Education Section */}
      <div>
        <h1 className="text-3xl font-bold pb-10 md:text-4xl md:pb-12">Education</h1>
        <EducationItem
          school="Mahidol University, Thailand"
          year="2018 - 2022"
          program="B.Sc. in Information and Communication Technology (Computer Science)"
          grade="CGPA: 3.96 / 4.00"
        >
          <ul className="list-disc pl-6">
            <li className="pb-3">
              <p>
                A nearly straight-A student who excelled at many courses
                including Software Design and Development, Web Development, OOP,
                Algorithms, Data Science, and more
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold">Senior Project:</span>{' '}
                Developing eSit (Ergonomic Sitting Posture Monitoring System
                using Computer Vision Techniques) using React for UI Client,
                Express for API Server, & FastAPI for Machine Learning Server
              </p>
              <p className="font-semibold pt-2">
                (Typescript, React, Node.js, FastAPI, Firebase, Docker)
              </p>
            </li>
          </ul>
        </EducationItem>
        <EducationItem
          school="Bak Touk High School"
          year="2014 - 2017"
          program="Math and Science"
          grade="Overall Grade: A"
        >
          <ul className="list-disc pl-6">
            <li className="pb-3">
              <p>
                Cambodian Secondary Education Exam for Senior High School
                2016-2017
              </p>
              <p className="font-semibold pt-2">
                (Classification of Overall Score: 99.714)
              </p>
            </li>
          </ul>
        </EducationItem>
      </div>

    </main>
  )
}

export default About
