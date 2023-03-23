import { ReactNode } from 'react'

export const ExperienceItem = (props: {
  year: string
  month: string
  position: string
  employer: string
  children: ReactNode | ReactNode[]
}) => (
  <div className="pb-10 md:pb-12">
    <div className="text-left flex">
      {/* Period */}
      <div className="flex-1 font-semibold pr-4">
        <p className="text-xl md:text-2xl">{props.year}</p>
        <p className="text-lg pt-1 md:text-xl">{props.month}</p>
      </div>

      <div className="flex-[4]">
        {/* Position */}
        <h2 className="text-xl font-semibold md:text-2xl">{props.position}</h2>
        <p className="text-lg pt-1 md:text-xl">{props.employer}</p>

        {/* Description */}
        <div className="hidden sm:block text-lg pl-6 pt-4 md:text-xl md:leading-8">{props.children}</div>
      </div>
    </div>

    {/* Description - Mobile */}
    <div className="sm:hidden text-left text-lg pl-6 pt-4 md:text-xl md:leading-8">{props.children}</div>
  </div>
)
