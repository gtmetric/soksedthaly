import { PersonalData } from '../../types/PersonalData'
import { BulletPoint } from './BulletPoint'
import { Header } from './ExperienceHeader'

type EducationListProps = { education: PersonalData['education'] }

export const EducationList = ({ education }: EducationListProps) => (
  <div className="text-center">
    <Header title="Education" description="Short Description" />

    <div className="flex">
      {education
        .sort((prev, curr) => (prev.intervalYear > curr.intervalYear ? 1 : -1))
        .map((item) => (
          <div key={item.title} className="basis-1/2 py-16 px-28">
            <div>
              <div>{item.title}</div>
              <div>
                {item.intervalYear} | {item.degree}
              </div>
            </div>

            <div>{item.grade}</div>
            <div>
              {item.achievements.map((achievement) => (
                <BulletPoint
                  key={achievement.description}
                  bulletPoint={achievement}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  </div>
)
