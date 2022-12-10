import { ReactNode } from 'react'

export const EducationItem = (props: {
  school: string
  year: string
  program: string
  grade: string
  children: ReactNode | ReactNode[]
}) => (
  <div className="pb-10 md:pb-12">
    <div className="text-left">
      <h2 className="text-xl font-semibold md:text-2xl">{props.school}</h2>
      <p className="text-lg pt-2 md:text-xl md:pt-4">
        <span className="font-bold hidden sm:inline">{props.year}</span>
        <span className="text-xl px-1 hidden sm:inline"> | </span>
        {props.program}{' '}
        {/* <span className="font-bold pt-1 sm:hidden">({props.year})</span> */}
      </p>
      <p className="text-lg font-bold pt-3 sm:hidden md:text-xl">{props.year}</p>
      <h2 className="text-xl font-semibold py-4 md:text-2xl md:py-6">{props.grade}</h2>
      <div className="text-lg md:text-xl md:leading-8">{props.children}</div>
    </div>
  </div>
)
