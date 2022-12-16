import { Experience } from '../../../types/PersonalData'

type ExperienceSummaryProps = Omit<Experience, 'duties'>

export const ExperienceSummary = (props: ExperienceSummaryProps) => {
  const { title, subtitle, intervalMonth, intervalYear } = props

  return (
    <>
      <div className="space-y-2">
        <div className="font-semibold text-4xl">{title}</div>
        <div className="font-normal text-3xl">{subtitle}</div>
      </div>

      <div className="font-medium text-2xl">
        {intervalMonth}, {intervalYear}
      </div>
    </>
  )
}
