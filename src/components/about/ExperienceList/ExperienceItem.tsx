import { Experience } from '../../../types/PersonalData'
import { ExperienceSummary } from './ExperienceSummary'
import { DutyList } from './DutyList'

type ExperienceItemProps = {
  experience: Experience
  theme: 'light' | 'dark'
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  const { theme, experience } = props
  const { title, subtitle, intervalMonth, intervalYear, duties } = experience

  const bgColor = theme === 'light' ? '' : 'bg-gray-primary'

  return (
    <div
      className={`${bgColor} flex py-14 px-8 sm:px-28 text-default space-x-12`}
    >
      <div className="flex-1 space-y-24">
        <ExperienceSummary
          title={title}
          subtitle={subtitle}
          intervalMonth={intervalMonth}
          intervalYear={intervalYear}
        />
      </div>

      <div className="flex-[2]">
        <DutyList duties={duties} />
      </div>
    </div>
  )
}
