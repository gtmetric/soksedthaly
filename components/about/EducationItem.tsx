import { ReactNode } from 'react'

export const EducationItem = (props: {
  school: string
  year: string
  program: string
  grade: string
  children: ReactNode | ReactNode[]
}) => (
  <div className="pb-10">
    <div className="text-left">
      <h2 className="text-lg font-semibold">{props.school}</h2>
      <p className="pt-2">
        <span className="font-bold hidden sm:inline">{props.year}</span>
        <span className="text-xl px-1 hidden sm:inline"> | </span>
        {props.program}{' '}
        {/* <span className="font-bold pt-1 sm:hidden">({props.year})</span> */}
      </p>
      <p className="font-bold pt-3 sm:hidden">{props.year}</p>
      <h2 className="text-lg font-semibold py-4">{props.grade}</h2>
      <div>{props.children}</div>
    </div>
  </div>
)
