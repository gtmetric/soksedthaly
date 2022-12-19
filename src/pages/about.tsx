import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getPersonalData } from '../clients/api'
import { Hero } from '../components/about/Hero'
import { ExperienceList } from '../components/about/ExperienceList'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar/NavBar'
import { API } from '../constants/api'
import { PersonalData } from '../types/PersonalData'
import { TIME_INTERVAL } from '../constants/time-interval'
import { BulletPoint } from '../components/about/BulletPoint'
import { Header } from '../components/about/ExperienceHeader'
import { EducationList } from '../components/about/EducationList'

type AboutPageProps = {
  data: PersonalData
}

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  const { about, experiences, education } = data

  return (
    <main className="text-center max-w-4xl mx-auto sm:max-w-screen-2xl">
      <Hero about={about} />

      <ExperienceList experiences={experiences} />

      <EducationList education={education} />
      {/* Education Section */}
      {/* <div>
        <h1 className="text-3xl font-bold pb-12 pt-2 md:text-4xl">Education</h1>
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
      </div> */}
    </main>
  )
}

export async function getStaticProps() {
  const data = await getPersonalData()
  return { props: { data }, revalidate: TIME_INTERVAL.WEEK_IN_SECONDS }
}

export default AboutPage
