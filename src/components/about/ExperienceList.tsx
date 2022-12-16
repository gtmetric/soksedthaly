import { Experience } from '../../types/PersonalData'
import { ExperienceHeader } from './ExperienceList/ExperienceHeader'
import { ExperienceItem } from './ExperienceList/ExperienceItem'

type ExperienceListProps = {
  experiences: Experience[]
}

export const ExperienceList = ({ experiences }: ExperienceListProps) => (
  <div className="text-left">
    <ExperienceHeader />

    {experiences.map((experience, index) => (
      <ExperienceItem
        key={experience.title}
        experience={experience}
        theme={index % 2 === 0 ? 'dark' : 'light'}
      />
    ))}
  </div>
)
