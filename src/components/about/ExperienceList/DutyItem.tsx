import { BulletPoint as DutyItemProps } from '../../../types/PersonalData'

export const DutyItem = ({ description, highlight }: DutyItemProps) => (
  <li className="space-y-2">
    <div className="font-normal text-3xl">{description}</div>
    <div className="font-semibold text-3xl">{highlight}</div>
  </li>
)
