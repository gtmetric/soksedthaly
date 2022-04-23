import { ReactNode } from 'react'

export const ExperienceItem = (props: {
  year: string
  month: string
  position: string
  employer: string
  children: ReactNode | ReactNode[]
}) => (
  <div className="pb-10">
    <div className="text-left flex">
      {/* Period */}
      <div className="font-semibold pr-8">
        <p className="text-lg">{props.year}</p>
        <p className="pt-1">{props.month}</p>
      </div>
      {/* Position */}
      <div>
        <h2 className="text-lg font-semibold">{props.position}</h2>
        <p className="pt-1">{props.employer}</p>
        {/* Description */}
        <div className="hidden sm:block pl-6 pt-4">{props.children}</div>
      </div>
    </div>
    {/* Description - Mobile */}
    <div className="sm:hidden text-left pl-6 pt-4">{props.children}</div>
  </div>
)
