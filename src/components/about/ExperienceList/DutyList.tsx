import { BulletPoint as TBulletPoint } from '../../../types/PersonalData'
import { BulletPoint } from '../BulletPoint'

type DutyListProps = { duties: TBulletPoint[] }

export const DutyList = ({ duties }: DutyListProps) => (
  <ul className="list-disc">
    {duties.map((duty) => (
      <BulletPoint key={duty.description} bulletPoint={duty} />
    ))}
  </ul>
)
