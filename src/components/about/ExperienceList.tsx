import { Experience } from '../../types/PersonalData'
import { Header } from './ExperienceHeader'
import { ExperienceItem } from './ExperienceList/ExperienceItem'

type ExperienceListProps = {
  experiences: Experience[]
}

export const ExperienceList = ({ experiences }: ExperienceListProps) => (
  <div className="text-left">
    <Header title="Experience" description="Short Description" />

    {experiences.map((experience, index) => (
      <ExperienceItem
        key={experience.title}
        experience={experience}
        theme={index % 2 === 0 ? 'dark' : 'light'}
      />
    ))}
  </div>
)
