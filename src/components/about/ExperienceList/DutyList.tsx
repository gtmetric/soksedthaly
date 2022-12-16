import { BulletPoint } from '../../../types/PersonalData'
import { DutyItem } from './DutyItem'

type DutyListProps = { duties: BulletPoint[] }

export const DutyList = ({ duties }: DutyListProps) => (
  <ul className="list-disc">
    {duties.map(({ description, highlight }) => (
      <DutyItem
        key={description}
        description={description}
        highlight={highlight}
      />
    ))}
  </ul>
)
