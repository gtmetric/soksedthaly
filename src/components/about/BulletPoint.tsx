import { BulletPoint as TBulletPoint } from '../../types/PersonalData'

type BulletPointProps = { bulletPoint: TBulletPoint }

export const BulletPoint = (props: BulletPointProps) => {
  const { heading, description, highlight } = props.bulletPoint

  return (
    <li className="space-y-2">
      <div>
        {heading && <div className="font-bold text-3xl">{heading}: </div>}
        <div className="font-normal text-3xl">{description}</div>
      </div>

      <div className="font-semibold text-3xl">{highlight}</div>
    </li>
  )
}
