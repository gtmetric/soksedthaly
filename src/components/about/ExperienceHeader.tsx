type HeaderProps = { title: string; description: string }

export const Header = ({ title, description }: HeaderProps) => (
  <div className="space-y-4 py-14 px-8 sm:px-28">
    <div className="font-bold text-5xl text-default">{title}</div>
    <div className="font-normal text-2xl text-default">{description}</div>
  </div>
)
